import { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

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
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="w-full px-6 py-4 pr-14 rounded-3xl backdrop-blur-xl transition-all duration-200 shadow-lg focus:outline-none focus:ring-2"
          style={{
            backgroundColor: '#EEEEF0',
            color: '#000000',
            border: '1px solid #EEEEF0',
            '--tw-ring-color': '#DAFF96'
          }}
        />
        <motion.button
          type="submit"
          disabled={!message.trim()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full backdrop-blur-xl flex items-center justify-center transition-all duration-200 shadow-lg disabled:cursor-not-allowed"
          style={{
            backgroundColor: message.trim() ? '#DAFF96' : '#EEEEF0',
            border: `1px solid ${message.trim() ? '#DAFF96' : '#EEEEF0'}`,
            opacity: message.trim() ? 1 : 0.5
          }}
        >
          <Send className="w-4 h-4" style={{ color: '#000000' }} />
        </motion.button>
      </div>
    </form>
  );
}