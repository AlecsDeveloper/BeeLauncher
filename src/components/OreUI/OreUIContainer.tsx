import React, { ReactNode, CSSProperties } from 'react';

interface OreUIContainerProps {
  content?: ReactNode;
  style?: CSSProperties;
  className?: string;
  id?: string
  children?: ReactNode
}

const OreUIContainer: React.FC<OreUIContainerProps> = ({ children, content, style, className, id }) => {
  return (
    <div 
      className={`oreui-container bg-oreui-charcoal-darker border-[3px] border-black ${className}`} 
      style={style}
      id={id}
    >
      {content ? content : ''}
      {children ? children : ''}
    </div>
  );
};

export default OreUIContainer;