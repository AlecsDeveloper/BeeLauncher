import React, { ReactNode, CSSProperties } from 'react';

interface OreUIContainerProps {
  content?: ReactNode;
  style?: CSSProperties;
  className?: string;
  id?: string
  center?: boolean
  children?: ReactNode
}

const OreUIContainer: React.FC<OreUIContainerProps> = ({ children, content, style, className, id, center}) => {
  return (
    <div
      className={`oreui-container bg-oreui-charcoal-darker border-[3px] border-black ${className || ''}`}
      style={style}
      id={id}
    >
      {content && content}
      {children && <div className={`p-2 ${center ? 'flex items-center' : ''}`}>{children}</div>}
    </div>
  );
};


export default OreUIContainer;