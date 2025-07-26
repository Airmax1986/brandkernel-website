// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import GridContainer from "./GridContainer";

export default function Hero() {
  return (
    <div className="flex items-center justify-start min-h-screen text-white">
      <GridContainer className="flex-col items-start text-left">
        <div className="col-start-1 col-span-7 flex flex-col items-start">
          <motion.div
            className="max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* THE FIX: text-hero (2rem) und font-light angewendet */}
            <div className="text-hero font-light leading-snug">
              <h1>
                Finally stand out – with positioning that feels like you.
              </h1>
              <p className="mt-6">
                We guide you through a deep, personal brand discovery, powered by an empathetic AI brand consultant. Together, we’ll uncover the core of your personality and what truly sets you apart. Read more
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center space-x-3 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-orange-500 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
            <span>Start your brand discovery now – receive your personal brand book after.</span>
          </motion.div>
        </div>
      </GridContainer>
    </div>
  );
}
