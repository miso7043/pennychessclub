import React from 'react';
import './GlassBox.scss';

interface GlassBoxProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
}

export const GlassBox: React.FC<GlassBoxProps> = ({
  children,
  className = '',
  size = 'medium',
  rounded = false
}) => {
  const containerClasses = [
    'glass-container',
    `glass-container--${size}`,
    rounded ? 'glass-container--rounded' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <div className="glass-filter"></div>
      <div className="glass-overlay"></div>
      <div className="glass-specular"></div>
      <div className="glass-content">
        {children}
      </div>
    </div>
  );
};

export default GlassBox;