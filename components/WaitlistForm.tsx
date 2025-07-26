// components/WaitlistForm.tsx
"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/join-waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setMessage(data.message || data.error);
    if (res.ok) {
      setEmail("");
    }
  };

  return (
    // THE FIX IS HERE:
    // 'fixed' keeps it at the bottom of the screen.
    // 'z-20' places it on top of other content.
    <div className="fixed bottom-0 left-0 right-0 w-full p-4 z-20">
      <div className="container mx-auto flex justify-center items-center gap-x-4">
          <span className="text-white font-semibold">Join our Waitlist</span>
          <form onSubmit={handleSubmit} className="flex items-center shadow-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@mail.com"
                className="bg-white text-black px-4 py-2 rounded-l-md focus:outline-none w-64"
                required
              />
              <button type="submit" className="bg-orange-500 text-white p-2 rounded-r-md hover:bg-orange-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
          </form>
          <span className="text-orange-400">247 people already joined</span>
      </div>
      {message && <p className="text-center mt-2 text-sm text-white">{message}</p>}
    </div>
  );
}
