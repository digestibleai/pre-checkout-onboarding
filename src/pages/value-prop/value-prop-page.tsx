import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { NavButton } from '../../components/nav-button/nav-button';
import '../../fonts.css';

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
    <div>
      <span className="poppins-black" style={{ color: 'rgb(1, 63, 50)', fontSize: 48 }}>Start Your AI Transformation Today</span>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
        <div style={{ backgroundColor: 'rgb(76, 140, 156)', borderRadius: 16, padding: 16, boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)' }}>
          <p className="poppins-extrabold">Your AI Goal:</p>
          <p className=".poppins-regular-italic">Let's achieve it together...</p>
          <p className="poppings-extrabold">{goal}</p>
        </div>
        <div>
          <p className="poppins-extrabold"><s>$29</s> $5.99/month</p>
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
    </div>
  );
};

export { ValuePropPage };
