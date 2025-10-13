export const OrganicShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float blur-xl" />
      <div className="absolute top-40 right-20 w-48 h-48 bg-accent/5 rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-secondary/10 rounded-full animate-float blur-xl" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-primary/5 rounded-full animate-float blur-lg" style={{ animationDelay: '1s' }} />
      
      {/* Organic blobs */}
      <div 
        className="absolute top-1/4 -left-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 animate-blob blur-3xl"
        style={{ animationDelay: '0s' }}
      />
      <div 
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-br from-accent/10 to-primary/10 animate-blob blur-3xl"
        style={{ animationDelay: '3s' }}
      />
      
      {/* Geometric patterns */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="currentColor" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Wavy lines between sections */}
      <svg className="absolute top-1/2 left-0 w-full h-24 opacity-10" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path 
          d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z" 
          fill="currentColor" 
          className="text-primary"
        />
      </svg>
    </div>
  );
};
