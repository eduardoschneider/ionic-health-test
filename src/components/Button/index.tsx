import React from 'react';
import './styles.scss';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button' }) => {
  return (
    <button onClick={onClick} type={type} className="button">
      {children}
    </button>
  );
};

export default Button;