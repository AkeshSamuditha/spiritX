"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {  useState, useEffect } from "react";
export default function Header() {
  const router = useRouter();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('userEmail');
    setUsername(null);
    router.push('/auth/login');
  };
  

  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link href="/" className="hover:text-blue-400">
            SpiritX
          </Link>
        </h1>
        <nav className="flex gap-6">
          {username ? (
            <>
              <span className="hover:text-blue-400">Welcome, {username}</span>
              <button onClick={handleLogout} className="hover:text-blue-400">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/signup" className="hover:text-blue-400">Signup</Link>
              <Link href="/auth/login" className="hover:text-blue-400">Login</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
