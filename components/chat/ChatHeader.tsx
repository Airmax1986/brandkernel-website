'use client';

import { motion } from 'framer-motion';

export function ChatHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative p-4 rounded-t-brand-lg bg-brand-light border-b border-brand-light/50"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-brand bg-gradient-brand flex items-center justify-center shadow-brand">
            <svg className="w-5 h-5 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-black">Felix</h3>
            <div className="flex items-center gap-1.5 text-xs">
              <div className="w-2 h-2 bg-brand-green rounded-full"></div>
              <span className="text-neutral-600">Brand Consultant</span>
            </div>
          </div>
        </div>
        <div className="text-xs text-neutral-400">
          Online
        </div>
      </div>
    </motion.div>
  );
}
