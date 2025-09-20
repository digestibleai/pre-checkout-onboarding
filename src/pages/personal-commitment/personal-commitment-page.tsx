import React, { useState } from 'react';
import { NavButton } from '../../components/nav-button/nav-button';
import '../../fonts.css';
import '../../index.css';
import './personal-commitment-page.css';

interface PersonalCommitmentPageProps {
  onClick: () => void;
}

const PersonalCommitmentPage = ({ onClick }: PersonalCommitmentPageProps): React.ReactNode => {
  const [goal, setGoal] = useState<string>('');

  const handleSubmit = () => {
    if (goal.trim()) {
      // Here you could save the goal or perform other actions
      console.log('User goal:', goal);
      onClick();
    }
  };

  return (
    <div className="personal-commitment-container">
      <div className="headline-section">
        <div className="headline">
          <p className="poppins-black" style={{ fontSize: 48, marginBottom: 24 }}>
            What's Your AI Learning Goal?
          </p>
          <p className="poppins-regular" style={{ fontSize: 24 }}>
            Write your biggest AI goal below. <br />
            We'll create your personalized learning path in the next step.
          </p>
        </div>
      </div>
      <div className="input-section">
        <div className="input-container">
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Write your goal here!"
            className="goal-input"
          />
          <NavButton
            onClick={handleSubmit}
            text="Submit My Goal →"
            disabled={!goal.trim()}
          />
        </div>
      </div>
    </div>
  );
};

export { PersonalCommitmentPage };