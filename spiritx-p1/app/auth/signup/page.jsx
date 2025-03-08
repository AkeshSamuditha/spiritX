"use client";
import { signup } from "../../../lib/actions/auth"
import { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
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
      const response = await signup(formData);
      console.log(response);
      if (response.success)
      {
        router.push("/");
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Error signing up");
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "100px" }}>
      <h2
        style={{
          backgroundColor: "yellow",
          color: "red",
          padding: "5px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        Sign Up
      </h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        Username:
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
          style={{ border: "2px solid black", padding: "5px" }}
        />
        <br />
        <br />
        Email:
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={{ border: "2px solid black", padding: "5px" }}
        />
        <br />
        <br />
        Password:
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={{ border: "2px solid black", padding: "5px" }}
        />
        <br />
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: " lightblue",
            color: "white",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
