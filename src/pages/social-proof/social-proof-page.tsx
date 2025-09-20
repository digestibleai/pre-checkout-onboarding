import React from 'react';
import { NavButton } from '../../components/nav-button/nav-button';
import '../../fonts.css';
import '../../index.css';
import image from '../../assets/social-proof.png';
import './social-proof-page.css';

interface SocialProofPageProps {
  onClick: () => void;
}

const SocialProofPage = ({ onClick }: SocialProofPageProps): React.ReactNode => {
  return (
    <div className="social-proof-container">
      <div className="content-row">
        <div className="headline-section">
          <div className="headline">
            <p className="poppins-black" style={{ fontSize: 48, marginBottom: 24 }}>
              Lessons That Actually Go Deep
            </p>
            <p className="poppins-regular" style={{ fontSize: 24, marginBottom: 24 }}>
              Not another surface-level AI overview. Master specific tools, workflows, <br />
              and prompts that work in real business situations. In your first 3 days, <br />
              <b>you’ll master AI such as prompting, research and automation using:</b>
            </p>
          </div>
        </div>
        <div className="image-section">
          <img src={image} alt="Social Proof" />
        </div>
      </div>
      <div className="button-section">
        <NavButton onClick={onClick} text="Next: What You'll Master →" />
      </div>
    </div>
  );
};

export { SocialProofPage };
