import React from 'react';
import { useMediaQuery } from 'react-responsive';
import CheckIcon from '@mui/icons-material/Check';
import { NavButton } from '../../components/nav-button/nav-button';
import '../../fonts.css';
import Arrow from '../../assets/arrow.png';
import './value-prop-page.css';

interface ValuePropPageProps {
  goal: string;
}

const ListBulletIcon = () => {
  return (
    <CheckIcon style={{ color: 'white', marginRight: '8px', fontSize: '20px' }} />
  )
}

const ValuePropPage = ({ goal }: ValuePropPageProps): React.ReactNode => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="value-prop-page-container">
      <span className="poppins-black value-prop-headline">Start Your AI Transformation Today</span>
      <div className="containers-wrapper">
        <div className="goal-container">
          <p className="poppins-extrabold goal-title">Your AI Goal:</p>
          <p className="poppins-regular-italic goal-subtitle">Let's achieve it together...</p>
          <p className="poppins-extrabold goal-text">"{goal}"</p>
        </div>
        {!isMobile && <div className="arrow-container">
          <img src={Arrow} alt="Arrow" />
        </div>}
        <div className="value-prop-container">
          <p className="poppins-extrabold price-text"><s>$29</s> $5.99/month</p>
          <ul className="features-list">
            <li className="feature-item">
              <ListBulletIcon />
              <span className="poppins-regular">Access to all AI tools and workflows</span>
            </li>
            <li className="feature-item">
              <ListBulletIcon />
              <span className="poppins-regular">Personalized learning path for your goal</span>
            </li>
            <li className="feature-item">
              <ListBulletIcon />
              <span className="poppins-regular">Weekly progress tracking and insights</span>
            </li>
            <li className="feature-item">
              <ListBulletIcon />
              <span className="poppins-regular">Cancel anytime, no questions asked</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="button-section">
        <NavButton
          href="https://www.digestibly.ai/offers/rXwTSUjT/checkout"
          target="_blank"
          rel="noopener noreferrer"
          text={isMobile ? "Start Free Trial!" : "Start my Free Trial! →"}
        />
      </div>
    </div>
  );
};

export { ValuePropPage };
