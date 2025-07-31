import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { ChatHeader } from './ChatHeader';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! I\'m Felix, your Brand Consultant. I\'m here to help you build stronger brands, develop strategic positioning, and create meaningful connections with your audience. How can I assist you today?',
    isUser: false,
    timestamp: '2:30 PM'
  },
  {
    id: '2',
    text: 'Hi Felix! I need help with my brand strategy.',
    isUser: true,
    timestamp: '2:31 PM'
  },
  {
    id: '3',
    text: 'Perfect! I\'d love to help you with your brand strategy. Let\'s start by understanding your brand\'s core values, target audience, and unique positioning. What industry are you in, and what makes your brand different from competitors?',
    isUser: false,
    timestamp: '2:31 PM'
  }
];

// Felix's brand consulting responses
const felixResponses = [
  "That's an excellent brand question! Let me share some strategic insights...",
  "From a brand positioning perspective, I'd recommend considering...",
  "That's a common branding challenge. Here's how I'd approach it strategically...",
  "Great question! Brand consistency is key here. Let me explain...",
  "I love discussing brand identity! From my consulting experience...",
  "That's where strong brand storytelling comes in. Here's what I'd suggest...",
  "Excellent point about brand differentiation! Let me share some insights...",
  "Brand perception is crucial here. From a strategic standpoint...",
  "That's a smart branding consideration. I'd recommend focusing on...",
  "Perfect timing for brand optimization! Here's my professional take...",
];

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string) => {
    const now = new Date();
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate Felix's brand consulting response
    setTimeout(() => {
      const felixResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: felixResponses[Math.floor(Math.random() * felixResponses.length)],
        isUser: false,
        timestamp
      };
      setMessages(prev => [...prev, felixResponse]);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto h-[80vh] flex flex-col backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden relative"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #EEEEF0'
      }}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="p-6 pb-0">
          <ChatHeader />
        </div>
        
        <div className="flex-1 overflow-y-auto px-6 py-4 scroll-smooth">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-6 pt-4">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </motion.div>
  );
}