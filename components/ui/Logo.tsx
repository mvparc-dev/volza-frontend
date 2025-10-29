'use client';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showTagline = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: {
      container: 'text-lg',
      icon: 'w-6 h-6',
      tagline: 'text-xs'
    },
    md: {
      container: 'text-2xl',
      icon: 'w-10 h-10',
      tagline: 'text-xs'
    },
    lg: {
      container: 'text-3xl',
      icon: 'w-12 h-12',
      tagline: 'text-sm'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`flex items-center ${currentSize.container}`}>
        {/* Volza V Logo */}
        <svg 
          width={size === 'sm' ? 24 : size === 'md' ? 40 : 48} 
          height={size === 'sm' ? 24 : size === 'md' ? 40 : 48} 
          viewBox="0 0 40 40" 
          className="mr-2"
        >
          <defs>
            <linearGradient id="vGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          {/* Main V shape */}
          <path
            d="M5 35 L20 5 L35 35 L30 35 L20 15 L10 35 Z"
            fill="url(#vGradient)"
          />
          {/* Inner triangle */}
          <path
            d="M15 25 L20 15 L25 25 Z"
            fill="#3b82f6"
          />
        </svg>
        <span className="font-bold text-[#2563eb]">volza</span>
      </div>
      
      {showTagline && (
        <div className={`${currentSize.tagline} font-medium text-gray-500 tracking-wider mt-1`}>
          GROW GLOBAL
        </div>
      )}
    </div>
  );
}
