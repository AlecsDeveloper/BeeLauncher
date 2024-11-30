import React, { ReactNode, CSSProperties } from 'react';

interface OreUIContainerProps {
  content?: ReactNode;
  style?: CSSProperties;
  className?: string;
  id?: string
}

const OreUIContainer: React.FC<OreUIContainerProps> = ({ content, style, className, id }) => {
  return (
    <div 
      className={`oreui-container bg-oreui-charcoal-darker border-[3px] border-black ${className}`} 
      style={style}
      id={id}
    >
      {content ? content : ''}
    </div>
  );
};

export default OreUIContainer;