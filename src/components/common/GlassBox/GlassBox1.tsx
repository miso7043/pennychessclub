import React, { useMemo } from 'react';
import './GlassBox1.scss';

interface GlassBox1Props {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  inline?: boolean;
}

const GlassBox1: React.FC<GlassBox1Props> = ({ 
  children, 
  className = '', 
  size = 'medium',
  rounded = false,
  inline = false
}) => {
  // 각 컴포넌트 인스턴스마다 고유한 ID 생성
  const filterId = useMemo(() => `lg-dist-${Math.random().toString(36).substr(2, 9)}`, []);
  const containerClasses = `
    glass-container 
    ${size === 'large' ? 'glass-container--large' : ''}
    ${rounded ? 'glass-container--rounded' : ''}
    ${className}
  `.trim();

  const contentClasses = `
    glass-content
    ${inline ? 'glass-content--inline' : ''}
  `.trim();

  return (
    <div className="container">
      <div className={containerClasses}>
        <div className="glass-filter" style={{ filter: `url(#${filterId})` }}></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>
        
        {/* SVG FILTER DEFINITION */}
        <svg style={{ display: 'none' }}>
          <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.008 0.008" 
              numOctaves="2" 
              seed="92" 
              result="noise" 
            />
            <feGaussianBlur 
              in="noise" 
              stdDeviation="2" 
              result="blurred" 
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="blurred" 
              scale="70" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </svg>
        
        <div className={contentClasses}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default GlassBox1;
