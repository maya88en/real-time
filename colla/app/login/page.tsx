"use client";
import React, { useState } from "react";
import { supabase } from "../lib/initSupabase";

const LoginPage = () => {
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTokenSent, setIsTokenSent] = useState<boolean>(false);

  const authenticateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailAddress) {
      alert("Email address is required");
      return;
    }

    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithOtp({
      email: emailAddress,
      options: {
        emailRedirectTo: "https://real-time-mzlw7ocxw-mayas-projects-6e9de0a7.vercel.app/",
      },
    });

    if (error) {
      console.error(error);
      throw new Error("Something went wrong");
    }

    if (data) {
      setIsTokenSent(true);
      setTimeout(() => {
        setIsTokenSent(false); // show the login ui after 5 seconds
        setIsLoading(false);
      }, 5000);
    }
  };

  return (
    <form
      onSubmit={authenticateUser}
      className="flex flex-col gap-3 justify-center items-center h-screen max-w-lg mx-auto"
    >
      <label>Login with devabollator link 🧙🏽‍♂️</label>
      <input
        type="text"
        placeholder="Enter email address"
        className="border border-slate-200 w-full px-3 py-2 rounded-lg"
        onChange={(e) => setEmailAddress(e.target.value)}
        value={emailAddress}
      />

      <button
        type="submit"
        className="px-3 py-2 bg-slate-900 text-white rounded-lg text-base w-full"
        disabled={isTokenSent || isLoading}
      >
        {isTokenSent
          ? "Token sent...please check your email address"
          : isLoading
            ? "One moment please..."
            : "Send devabollator link"}
      </button>
    </form>
  );
};

export default LoginPage;