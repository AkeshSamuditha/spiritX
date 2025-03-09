"use server"

import { dbConnect } from "../db/mongodb";
import bcrypt from "bcryptjs";

import User from "../db/models/user";

export async function signup(formData) {
    try {
        await dbConnect();
        
        const email = formData.email;
        const password = formData.password;
        const user_name = formData.username;
        if (!email || !password || !user_name) {
            throw new Error("Missing required fields");
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error("User already exists");
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ user_name, email, password: hashedPassword });
        newUser.save();
        
        return { success: true, message: "User registered successfully"};
    } catch (error) {
        console.error('Error signing up:', error);
        
        // Return structured error object
        return { 
            success: false, 
            error: error.message || "Server error",
            code: error.message === "User already exists" ? "USER_EXISTS" : "SERVER_ERROR"
        };
    }
}

export async function login(formData) {
    try {
        await dbConnect();
        
        const email = formData.email;
        const password = formData.password
        console.log(formData, email, password)

        // Validate inputs 
        if (!email || !password) {
            throw new Error("Missing required fields");
        }

        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User not found");
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch){
            throw new Error("Password Does not Match")
        }

        return { success: true, message: "User logged in successfully", user: user };
    } catch (error) {
        console.error('Error logging in:', error);
        return { 
            success: false, 
            error: error.message || "Server error",
            code: error.message === "User not found" ? "USER_NOT_FOUND" : "SERVER_ERROR"
        };
    }
}
