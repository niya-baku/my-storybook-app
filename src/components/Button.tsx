import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  label,
  onClick,
}) => {
  const baseStyles = 'rounded-md font-semibold';
  const primaryStyles = primary 
    ? 'bg-blue-600 text-white hover:bg-blue-700' 
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  
  const sizeStyles = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };
  
  return (
    <button
      type="button"
      className={`${baseStyles} ${primaryStyles} ${sizeStyles[size]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;