import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import {dbConnect} from 'C:\Users\mbdba\Desktop\spiritx\spiritX\spiritx-p1\lib\db';
import { User } from "C:\Users\mbdba\Desktop\spiritx\spiritX\spiritx-p1\lib\db\models";
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
 
global . mongoose = {
  conn: null,
  Promise: null,
};

export async function dbConnect() {
    if (global.mongoose && global.mongoose.conn){
      console.log('connected from previous');
      return global . mongoose.conn;
    }
    else{
      const conString = process.env.MONGODB_URI;

      const promise = mongoose.connect(conString,{
        autoIndex: true,
      });

      global.mongoose = {
        conn: await promise,
        promise,
      };
      console.log('Newly connected');

      return await promise;
    }
  
};
 
async function getUser(email: string): Promise<User | null> {
    try {
        await dbConnect();
      const user = await User.findOne({ email }).exec();
      return user;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
    
  }
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
        }
 
        return null;
      },
    }),
  ],
});