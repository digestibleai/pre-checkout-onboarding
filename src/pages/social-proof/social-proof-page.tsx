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
      <div className="social-proof-content-row">
        <div className="image-section">
          <img src={image} alt="Social Proof" />
        </div>
        <div className="headline-section">
          <div className="headline">
            <p className="poppins-black" style={{ fontSize: 40, marginBottom: 24 }}>
              What's Stopping You From Mastering AI? (6,000+ Professionals Already Did With Us)
            </p>
            <p className="poppins-regular" style={{ marginBottom: 24 }}>
              Our newsletter grows by hundreds weekly because we make AI actually understandable.
            </p>
            <p className="poppins-regular" style={{ marginBottom: 24 }}>
              But you're here because you want more than tips—<b>you want transformation.</b>
              The professionals already inside our platform have one thing in common:
              they wrote down their biggest AI goal and committed to achieving it. What's yours?
            </p>
            <p className="poppins-regular-italic">
              From Google executives to startup founders to high school teachers,
              they all started with writing down one goal...
            </p>
          </div>
        </div>
      </div>
      <div className="button-section">
        <NavButton onClick={onClick} text="Next: See What You'll Master →" />
      </div>
    </div>
  );
};

export { SocialProofPage };
