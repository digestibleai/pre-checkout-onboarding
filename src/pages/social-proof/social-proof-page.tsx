import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavButton } from '../../components/nav-button/nav-button';
import '../../fonts.css';
import '../../index.css';
import image from '../../assets/social-proof.png';
import './social-proof-page.css';

interface SocialProofPageProps {
  onClick: () => void;
}

const SocialProofPage = ({ onClick }: SocialProofPageProps): React.ReactNode => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="social-proof-container">
      <div className="social-proof-content-row">
        <div className="image-section">
          <img src={image} alt="Social Proof" />
        </div>
        <div className="headline-section">
          <div className="headline">
            <p className="poppins-black social-proof-headline">
              What's Stopping You From Mastering AI? (6,000+ Professionals Already Did With Us)
            </p>
            <p className="poppins-regular social-proof-body-text">
              Our newsletter grows by hundreds weekly because we make AI actually understandable.
            </p>
            <p className="poppins-regular social-proof-body-text">
              But you're here because you want more than tips—<b>you want transformation.</b>
              The professionals already inside our platform have one thing in common:
              they wrote down their biggest AI goal and committed to achieving it. What's yours?
            </p>
            <p className="poppins-regular-italic social-proof-body-text">
              From Google executives to startup founders to high school teachers,
              they all started with writing down one goal...
            </p>
          </div>
        </div>
      </div>
      <div className="button-section">
        <NavButton onClick={onClick} text={isMobile ? "Continue" : "Next: See What You'll Master →"} />
      </div>
    </div>
  );
};

export { SocialProofPage };
