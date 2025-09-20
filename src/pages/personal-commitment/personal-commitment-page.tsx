import React from 'react';
import { NavButton } from '../../components/nav-button/nav-button';
import '../../fonts.css';
import '../../index.css';
import image from '../../assets/personal-commitment.png';
import './personal-commitment-page.css';

interface PersonalCommitmentPageProps {
  onClick: () => void;
}

const PersonalCommitmentPage = ({ onClick }: PersonalCommitmentPageProps): React.ReactNode => {
  return (
    <div className="personal-commitment-container">
      <div className="content-row">
        <div className="headline-section">
          <div className="headline">
            <p className="poppins-black" style={{ fontSize: 48, marginBottom: 24 }}>
              Join 6,000+<br />
              Professionals <br />
              Already Learning AI <br />
            </p>
            <p className="poppins-regular" style={{ fontSize: 24, marginBottom: 24 }}>
              Thousands of users are mastering AI daily on our platform...
            </p>
            <p className="poppins-regular" style={{ fontSize: 24 }}>
              Now get the full systematic training to 10x your career career.
            </p>
          </div>
        </div>
        <div className="image-section">
          <img src={image} alt="Personal Commitment" />
        </div>
      </div>
      <div className="button-section">
        <NavButton onClick={onClick} text="Next: See What You'll Master →" />
      </div>
    </div>
  );
};

export { PersonalCommitmentPage };
