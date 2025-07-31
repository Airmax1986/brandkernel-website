'use client';

import { motion } from 'framer-motion';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: string;
}

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
    >
      <div className="max-w-[80%] flex flex-col">
        <div
          className={`px-4 py-3 rounded-brand-lg shadow-brand ${
            isUser 
              ? 'bg-brand-purple text-brand-white' 
              : 'bg-brand-white text-brand-black border-1 border-brand-light'
          }`}
        >
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
        <span 
          className={`text-xs mt-1 text-neutral-500 ${isUser ? 'text-right' : 'text-left'}`}
        >
          {timestamp}
        </span>
      </div>
    </motion.div>
  );
}
