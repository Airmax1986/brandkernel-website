'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-brand-light rounded-b-brand-lg">
      <div className="relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask Felix about your brand..."
          className="w-full px-4 py-3 pr-12 rounded-brand bg-brand-white border-1 border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple transition-all duration-200 text-sm"
        />
        <motion.button
          type="submit"
          disabled={!message.trim()}
          whileHover={{ scale: message.trim() ? 1.05 : 1 }}
          whileTap={{ scale: message.trim() ? 0.95 : 1 }}
          className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-brand flex items-center justify-center transition-all duration-200 ${
            message.trim() 
              ? 'bg-gradient-brand hover:shadow-brand text-brand-black' 
              : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
          }`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </motion.button>
      </div>
    </form>
  );
}
