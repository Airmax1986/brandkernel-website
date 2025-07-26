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
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@mail.com"
          className="bg-white text-black px-4 py-2 rounded-l-md focus:outline-none"
          required
        />
        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
          →
        </button>
      </form>
      {message && <p className="mt-2 text-sm">{message}</p>}
      <p className="mt-2 text-sm">247 people already joined</p>
    </div>
  );
}