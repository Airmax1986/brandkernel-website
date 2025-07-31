import { motion } from 'motion/react';
import { Bot, Circle } from 'lucide-react';

export function ChatHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative p-6 rounded-3xl mb-6 backdrop-blur-xl shadow-lg"
      style={{
        backgroundColor: '#EEEEF0',
        border: '1px solid #EEEEF0'
      }}
    >
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div 
            className="w-12 h-12 rounded-2xl backdrop-blur-xl flex items-center justify-center shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #957FFF, #DAFF96)',
              border: '1px solid #FFFFFF'
            }}
          >
            <Bot className="w-6 h-6" style={{ color: '#FFFFFF' }} />
          </div>
          <div>
            <h1 className="text-lg font-medium" style={{ color: '#000000' }}>Felix</h1>
            <div className="flex items-center gap-2 text-sm">
              <Circle className="w-2 h-2" style={{ color: '#DAFF96', fill: '#DAFF96' }} />
              <span style={{ color: '#000000', opacity: 0.7 }}>Online</span>
            </div>
          </div>
        </div>
        <div className="text-xs" style={{ color: '#000000', opacity: 0.5 }}>
          App
        </div>
      </div>
    </motion.div>
  );
}