import React from 'react';

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg'; // `size` propini qo'shamiz
};

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', type = 'button', size = 'md' }) => {
  const baseClasses = 'rounded-lg font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50';
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
  };
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-md',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
