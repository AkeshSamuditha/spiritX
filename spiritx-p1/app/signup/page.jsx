"use client";
import "./page.css";
import { useState } from "react";
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
import Image from "next/image";
import signupPic from "./signup.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/signup", formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error signing up");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black">
      <div className="header ">
        <div className="sign-up">Sign Up</div>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="image">
              <Image src={signupPic} height={150} alt="image" />
            </div>
            <div className="input">
              <User />
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input">
              <Mail />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input">
              <Lock />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            <button className="button" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
