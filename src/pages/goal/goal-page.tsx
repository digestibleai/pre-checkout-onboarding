import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavButton } from '../../components/nav-button/nav-button';
import image from '../../assets/goal.png';
import './goal-page.css';

interface GoalPageProps {
  goal: string;
  onClick: () => void;
}

const GoalPage = ({ goal, onClick }: GoalPageProps): React.ReactNode => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="goal-page-container">
      <div className="content-section">
        <p className="poppins-black goal-headline" style={{ color: 'rgb(1, 63, 50)' }}>
          We Update Our Lessons Every Week
        </p>
        <span className="poppins-extrabold goal-subheading" style={{ color: 'rgb(1, 63, 50)' }}> Your AI Goal: </span>
        <p className="poppins-regular-italic goal-user-goal" style={{ color: 'rgb(1, 63, 50)' }}>
          {goal}
        </p>
        <p className="poppins-regular goal-body-text">
          We have the <b>exact, up-to-date roadmap to get you there.</b> Not just theory from 2023.
        </p>
      </div>
      <div className="image-section">
        <img src={image} alt="Goal" />
      </div>
      <div className="button-section">
        <NavButton onClick={onClick} text={isMobile ? "Continue" : "Next: Take a Peek at Our Lessons →"} />
      </div>
    </div>
  );
};

export { GoalPage };
