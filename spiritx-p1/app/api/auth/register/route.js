// app/api/auth/register/route.js

import { dbConnect } from "../../../../lib/db/mongodb";
import User from "@lib/db/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await dbConnect();
  try {
    const {user_name, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({user_name, email, password: hashedPassword });
    await newUser.save();

    return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
