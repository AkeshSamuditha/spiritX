"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // for navigation
import { signup } from "../../lib/actions/auth";
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const validate = async () => {
    let newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
     toast("Wow so easy!");

    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      const user = await signup("credentials", { email, password, redirect: false });
      console.log(user)
      localStorage.setItem("userEmail", email); 
      // router.push("/"); // Redirect to the landing page
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md h-[400px] border-green-500 bg-green-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-black">Login</h2>
        <form onSubmit={handleLogin} className="mt-4">
            <br></br>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validate(); // Trigger real-time validation
              }}
              className="w-full px-4 py-2 border-green-500 bg-green-100 text-black border rounded-lg"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>  
          <br></br>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validate(); // Trigger real-time validation
              }}
              className="w-full px-4 py-2 border-green-500 bg-green-100 text-black border rounded-lg"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <br></br><br></br>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
