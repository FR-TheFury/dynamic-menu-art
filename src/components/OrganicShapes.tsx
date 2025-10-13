export const OrganicShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating circles - More visible and numerous */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-primary/10 rounded-full animate-float blur-2xl" />
      <div className="absolute top-40 right-20 w-64 h-64 bg-accent/15 rounded-full animate-float blur-3xl" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-56 h-56 bg-secondary/20 rounded-full animate-float blur-2xl" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-primary/12 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-52 h-52 bg-accent/12 rounded-full animate-float blur-2xl" style={{ animationDelay: '5s' }} />
      <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-primary/8 rounded-full animate-float blur-xl" style={{ animationDelay: '3s' }} />
      
      {/* Organic blobs - More pronounced */}
      <div 
        className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-primary/15 to-accent/15 animate-blob blur-3xl"
        style={{ animationDelay: '0s' }}
      />
      <div 
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-accent/15 to-primary/15 animate-blob blur-3xl"
        style={{ animationDelay: '3s' }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-primary/8 to-accent/8 animate-blob blur-3xl"
        style={{ animationDelay: '6s' }}
      />
      
      {/* Geometric patterns - More visible */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Additional decorative circles */}
      <div className="absolute top-10 right-1/3 w-20 h-20 border-4 border-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/3 w-32 h-32 border-4 border-accent/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Wavy lines between sections - More visible */}
      <svg className="absolute top-1/2 left-0 w-full h-32 opacity-[0.15]" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path 
          d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z" 
          fill="currentColor" 
          className="text-primary"
        />
      </svg>
      <svg className="absolute bottom-1/3 left-0 w-full h-32 opacity-[0.12]" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path 
          d="M0,60 C360,100 720,20 1080,60 C1260,80 1350,40 1440,60 L1440,0 L0,0 Z" 
          fill="currentColor" 
          className="text-accent"
        />
      </svg>
    </div>
  );
};
