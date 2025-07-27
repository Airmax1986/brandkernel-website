"use client";

import { motion } from "framer-motion";
import GridContainer from "./GridContainer";

export default function Hero() {
  return (
    // Die Klasse "text-white" wurde entfernt. Die Farbe wird jetzt von globals.css geerbt.
    <div className="flex items-center justify-center min-h-screen">
      <GridContainer>
        <div className="col-span-full md:col-start-2 md:col-span-6 flex flex-col items-start text-left">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-hero font-light leading-snug">
              <h1>
                BrandKernel
              </h1>
              <p className="mt-6">
                Finally stand out – with positioning that feels like you.</br> We guide you through a deep, personal brand discovery, powered by an empathetic AI brand consultant. Together, we’ll uncover the core of your personality and what truly sets you apart. Read more
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center space-x-3 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-orange-500 p-2 rounded-md text-white">
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