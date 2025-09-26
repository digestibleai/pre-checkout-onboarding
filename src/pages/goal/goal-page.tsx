import React from 'react';
import { NavButton } from '../../components/nav-button/nav-button';
import image from '../../assets/goal.png';
import './goal-page.css';

interface GoalPageProps {
  goal: string;
  onClick: () => void;
}

const GoalPage = ({ goal, onClick }: GoalPageProps): React.ReactNode => {
  return (
    <div className="goal-page-container">
      <div className="content-section">
        <p className="poppins-black" style={{ color: 'rgb(1, 63, 50)', fontSize: 40 }}>
          We Update Our Lessons Every Week
        </p>
        <span className="poppins-extrabold" style={{ color: 'rgb(1, 63, 50)', fontSize: 32 }}> Your AI Goal: </span>
        <p className="poppins-regular-italic" style={{ color: 'rgb(1, 63, 50)', fontSize: 24 }}>
          {goal}
        </p>
        <p className="poppins-regular" style={{ fontSize: 16 }}>
          We have the <b>exact, up-to-date roadmap to get you there.</b> Not just theory from 2023.
        </p>
      </div>
      <div className="image-section">
        <img src={image} alt="Goal" />
      </div>
      <NavButton onClick={onClick} text="Next: Take a Peek at Our Lessons →" />
    </div>
  );
};

export { GoalPage };
