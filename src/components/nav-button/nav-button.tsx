import React from 'react';
import './nav-button.css';
import '../../fonts.css';

interface NavButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

const NavButton = ({ onClick, text, disabled = false }: NavButtonProps): React.ReactNode => {
  return (
    <button
      onClick={onClick}
      className={`nav-button poppins-extrabold ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export { NavButton };
