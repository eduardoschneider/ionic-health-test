import React from 'react';
import './styles.scss';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled: boolean
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button', disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} type={type} className="button">
      {children}
    </button>
  );
};

export default Button;