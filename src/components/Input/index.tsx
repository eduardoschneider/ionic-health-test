import React from 'react';
import './styles.scss';

interface InputProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ title, value, onChange, placeholder = '', type = 'text' }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <label className="label">{title}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="input"
      />
    </>
  );
};

export default Input;