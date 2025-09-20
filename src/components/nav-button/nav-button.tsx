import React from 'react';
import './nav-button.css';
import '../../fonts.css';

interface NavButtonProps {
  onClick: () => void;
  text: string;
}

const NavButton = ({ onClick, text }: NavButtonProps): React.ReactNode => {
  return (
    <button onClick={onClick} className="nav-button poppins-extrabold">{text}</button>
  );
};

export { NavButton };
