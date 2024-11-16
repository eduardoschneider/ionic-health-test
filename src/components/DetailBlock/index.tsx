import React from 'react';
import './styles.scss';

interface BlockProps {
  label: string;
  children: React.ReactNode;
}

const DetailBlock: React.FC<BlockProps> = ({ label, children }) => {
  return (
    <div className="block">
      <span className="title">{label}:</span>
      <div className="block-content">
        {children}
      </div>
    </div>
  );
};

export default DetailBlock;