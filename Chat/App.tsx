import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <div 
      className="min-h-screen p-4 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #DAFF96 0%, #957FFF 100%)'
      }}
    >
      {/* Animated background elements for additional depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" 
          style={{ 
            backgroundColor: '#FFFFFF', 
            opacity: 0.1,
            animationDuration: '4s'
          }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" 
          style={{ 
            backgroundColor: '#EEEEF0', 
            opacity: 0.15, 
            animationDelay: '2s',
            animationDuration: '6s'
          }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse" 
          style={{ 
            backgroundColor: '#FFFFFF', 
            opacity: 0.08, 
            animationDelay: '4s',
            animationDuration: '8s'
          }} 
        />
      </div>
      
      <div className="relative z-10 w-full">
        <Chatbot />
      </div>
    </div>
  );
}