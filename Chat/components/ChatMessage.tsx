import { motion } from 'motion/react';

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
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className="max-w-[70%] flex flex-col">
        <div
          className="relative px-6 py-4 rounded-3xl backdrop-blur-xl shadow-lg"
          style={{
            backgroundColor: isUser ? '#957FFF' : '#EEEEF0',
            color: isUser ? '#FFFFFF' : '#000000',
            border: `1px solid ${isUser ? '#957FFF' : '#EEEEF0'}`
          }}
        >
          <div className="relative z-10">
            <p className="text-sm leading-relaxed">{message}</p>
          </div>
        </div>
        <span 
          className={`text-xs mt-1 ${isUser ? 'text-right' : 'text-left'}`}
          style={{ color: '#000000', opacity: 0.6 }}
        >
          {timestamp}
        </span>
      </div>
    </motion.div>
  );
}