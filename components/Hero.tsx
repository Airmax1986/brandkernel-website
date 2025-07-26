// components/Hero.tsx
"use client"; 

import { motion } from "framer-motion";
import GridContainer from "./GridContainer";
// ... rest of the file

// components/Hero.tsx
import { motion } from "framer-motion";
import GridContainer from "./GridContainer"; // Import the grid

export default function Hero() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <GridContainer className="flex-col items-center text-center">
        {/* This div will span the full 8 columns of the grid */}
        <div className="col-span-full flex flex-col items-center">
          <motion.div
            className="max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl leading-tight">
              <span className="font-bold">Finally stand out</span>
              <span className="font-medium"> – with positioning that feels like you.</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mt-6 font-light">
              We guide you through a deep, personal brand discovery, powered by an empathetic AI brand consultant. Together, we’ll uncover the core of your personality and what truly sets you apart. Read more
            </p>
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
