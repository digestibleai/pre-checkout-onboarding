import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { NavButton } from '../../components/nav-button/nav-button';
import '../../fonts.css';
import Arrow from '../../assets/arrow.png';
import './value-prop-page.css';

interface ValuePropPageProps {
  goal: string;
  onClick: () => void;
}

const ListBulletIcon = () => {
  return (
    <CheckIcon style={{ color: 'white', marginRight: '8px', fontSize: '20px' }} />
  )
}

const ValuePropPage = ({ goal, onClick }: ValuePropPageProps): React.ReactNode => {
  return (
    <>
      <span className="poppins-black" style={{ color: 'rgb(1, 63, 50)', fontSize: 48 }}>Start Your AI Transformation Today</span>
      <div className="containers-wrapper">
        <div className="goal-container">
          <p className="poppins-extrabold" style={{ fontSize: 32 }}>Your AI Goal:</p>
          <p className="poppins-regular-italic" style={{ fontSize: 24 }}>Let's achieve it together...</p>
          <p className="poppins-extrabold" style={{ fontSize: 24, fontStyle: 'italic' }}>"{goal}"</p>
        </div>
        <div className="arrow-container">
          <img src={Arrow} alt="Arrow" />
        </div>
        <div className="value-prop-container">
          <p className="poppins-extrabold" style={{ fontSize: 32 }}><s>$29</s> $5.99/month</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <ListBulletIcon />
              <span className="poppins-regular">Access to all AI tools and workflows</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <ListBulletIcon />
              <span className="poppins-regular">Personalized learning path for your goal</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <ListBulletIcon />
              <span className="poppins-regular">Weekly progress tracking and insights</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <ListBulletIcon />
              <span className="poppins-regular">Cancel anytime, no questions asked</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="button-section">
        <NavButton onClick={onClick} text="Start my Free Trial! →" />
      </div>
    </>
  );
};

export { ValuePropPage };
