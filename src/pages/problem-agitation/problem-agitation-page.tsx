import React from 'react';
import { NavButton } from '../../components/nav-button/nav-button';
import '../../fonts.css';
import '../../index.css';
import image from '../../assets/problem-agitation.png';
import './problem-agitation-page.css';

const ProblemAgitationPage = (): React.ReactNode => {
  return (
    <div className="problem-agitation-container">
      <div className="content-row">
        <div className="headline-section">
          <div className="headline">
            <p className="poppins-black" style={{ fontSize: 48, marginBottom: 24 }}>
              Why 69% of Workers See <br />
              AI Skills as Their <br />
              Promotion Path <br />
            </p>
            <p className="poppins-regular" style={{ fontSize: 24, marginBottom: 24 }}>
              While you're reading this, your colleagues <br />
              are already using AI to work 3x faster.
            </p>
            <span className="poppins-regular" style={{ fontSize: 24 }}>Click <b>'Next'</b> to see where you stand.</span>
          </div>
        </div>
        <div className="image-section">
          <img src={image} alt="Problem Agitation" />
        </div>
      </div>
      <div className="button-section">
        <NavButton onClick={() => { }} text="Next: Check My AI Readiness →" />
      </div>
    </div>
  );
};

export { ProblemAgitationPage };
