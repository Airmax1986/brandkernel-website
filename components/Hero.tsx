"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Finally stand out – with positioning that feels like you.
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl max-w-4xl mb-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We guide you through a deep, personal brand discovery, powered by an empathetic AI brand consultant. Together, we’ll uncover the core of your personality and what truly sets you apart. Read more
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="z-10"
      >
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-orange-600 transition-colors">
          <span>Start your brand discovery now – receive your personal brand book after.</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </motion.div>
      <div className="absolute bottom-8 w-full px-4">
        <WaitlistForm />
      </div>
    </div>
  );
}
