import React, { ReactNode } from 'react';

interface OreUISectionProps {
  children: ReactNode; 
  className?: string;
  style?: React.CSSProperties;
}

const OreUISection: React.FC<OreUISectionProps> = ({ children, className = "", style = {} }) => {
  return (
    <div className="w-full h-full">
      <div className={`${className}`} style={style}>{children}</div>
    </div>
  );
};

export default OreUISection;