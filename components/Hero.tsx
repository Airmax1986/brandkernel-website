"use client";
import { motion } from "framer-motion";
import GridContainer from "./GridContainer";
import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    // Der äußere Container zentriert den GridContainer vertikal und horizontal
    <section className="flex items-center justify-center min-h-screen py-32">
      <GridContainer>
        {/*
          Dieser innere Container nimmt die volle Breite des Rasters ein,
          aber der Text darin bleibt linksbündig.
        */}
        <div className="col-span-full flex flex-col items-start text-left">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-9xl font-regular leading-tight">
              The Conversation That Changes Everything.
            </h1>
            <p className="text-3xl font-light mt-8 max-w-6xl">
              While millions fight for attention with generic AI content, the winners go deeper. BrandKernel guides you through the strategic dialogue that uncovers your authentic positioning—the foundation successful creators, consultants, and founders build empires on.
            </p>
          </motion.div>

          <motion.div
            className="w-full mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-center text-xl mb-4">Choose your path</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <CtaButton href="/creators">Creator</CtaButton>
              <CtaButton href="/consultants">Freelancer</CtaButton>
              <CtaButton href="/founders">Founder</CtaButton>
            </div>
          </motion.div>
        </div>
      </GridContainer>
    </section>
  );
}