// components/WaitlistForm.tsx
"use client";
import { useState } from "react";
// GridContainer wird hier nicht mehr benötigt
// ... (useState und handleSubmit bleiben gleich)

export default function WaitlistForm({ isHidden }: { isHidden: boolean }) {
  // ... (useState und handleSubmit Logik hier einfügen)
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setIsSuccess(true);
        setMessage(data.message || "Success!");
      } else {
        setMessage(data.error || "An error occurred.");
      }
    } catch (error) {
      setMessage("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Wir fügen eine CSS-Klasse hinzu, um die Leiste basierend auf 'isHidden' auszublenden
    <div className={`fixed bottom-0 left-0 right-0 w-full p-4 z-20 transition-opacity duration-300 ${isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="container mx-auto flex justify-center items-center gap-x-4">
        <span className="font-semibold">Join our Waitlist</span>
        {/* Der Rest des Formulars bleibt gleich */}
        {isSuccess ? (
            <div className="flex items-center justify-center text-center bg-green-500 text-white px-4 py-2 rounded-md shadow-lg h-[42px] w-[320px]">
              <span>{message}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center shadow-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@mail.com"
                className="bg-white text-black text-base placeholder:text-black px-4 py-2 rounded-l-md focus-outline-none w-64 h-[42px]"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-orange-500 text-white p-2 rounded-r-md hover:bg-orange-600 transition-colors disabled:bg-gray-400 h-[42px]"
                disabled={isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          )}
        <span className="text-orange-400">247 people already joined</span>
      </div>
      {!isSuccess && message && (
        <p className="text-center mt-2 text-sm text-red-400 font-semibold">{message}</p>
      )}
    </div>
  );
}