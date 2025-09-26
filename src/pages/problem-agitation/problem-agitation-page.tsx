import React from 'react';
import { NavButton } from '../../components/nav-button/nav-button';
import '../../fonts.css';
import '../../index.css';
import image from '../../assets/problem-agitation.png';
import './problem-agitation-page.css';

interface ProblemAgitationPageProps {
  onClick: () => void;
}

const ProblemAgitationPage = ({ onClick }: ProblemAgitationPageProps): React.ReactNode => {
  return (
    <div className="problem-agitation-container">
      <div className="content-row">
        <div className="headline-section">
          <div className="headline">
            <p className="poppins-black" style={{ fontSize: 48, marginBottom: 24 }}>
              While You're Reading
              This, Your Colleagues Are
              Already 3x More Productive
            </p>
            <p className="poppins-regular" style={{ fontSize: 16, marginBottom: 24 }}>
              Kevin was shipping AI models at AWS that generated $20M+ in revenue. Reyhan builds AI systems for Fortune 500 companies.
            </p>
            <p className="poppins-regular" style={{ fontSize: 16 }}>
              But they kept witnessing the same frustrating pattern: brilliant professionals watching from the sidelines
              as their tech-savvy colleagues leveraged AI to work faster, smarter, and get promoted first.
            </p>
            <p className="poppins-regular" style={{ fontSize: 16 }}>
              The reason? AI education was either impossibly technical or ridiculously expensive
            </p>
            <p className="poppins-regular" style={{ fontSize: 16 }}>
              That's when they came up with an idea that would change everything...
            </p>
          </div>
        </div>
        <div className="image-section">
          <img src={image} alt="Problem Agitation" />
        </div>
      </div>
      <div className="button-section">
        <NavButton onClick={onClick} text="Next: See What They Built Together →" />
      </div>
    </div>
  );
};

export { ProblemAgitationPage };
