"use client";
import { motion } from "framer-motion";
import GridContainer from "./GridContainer";
import PathButton from "./PathButton";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-screen py-32">
      <GridContainer>
        <div className="col-span-full flex flex-col items-start text-left">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl font-bold leading-tight">
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
            <p className="text-xl mb-6">Every day, another thousand businesses launch. Another million posts published. Another wave of AI-generated sameness floods the market.</p>
            <p className="text-xl font-medium">The few who break through? They start with clarity about who they are and why they matter.</p>
            <div className="mt-12">
              <p className="text-center text-xl mb-4">Choose your path</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <PathButton href="/#creators">I'm a Creator</PathButton>
                <PathButton href="/#consultants">I'm a Freelancer/Consultant</PathButton>
                <PathButton href="/#founders">I'm a Founder</PathButton>
              </div>
            </div>
          </motion.div>
        </div>
      </GridContainer>
    </section>
  );
}