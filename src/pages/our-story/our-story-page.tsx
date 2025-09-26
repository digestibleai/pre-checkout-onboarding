import React from 'react';
import image from '../../assets/digestibly_times_sq.jpeg';
import './our-story-page.css';
import { NavButton } from '../../components/nav-button/nav-button';

interface OurStoryPageProps {
  onClick: () => void;
}

const OurStoryPage = ({ onClick }: OurStoryPageProps): React.ReactNode => {
  return (
    <div className="our-story-container">
      <div className="headline-section" style={{ textAlign: 'center' }}>
        <span className="poppins-black" style={{ fontSize: 36 }}>
          We Launched at $29/Month... <br />
          Then Realized We Were Still Part of the Problem...
        </span>
      </div>
      <div className="content-section poppins-regular">
        <p>
          Here's our honest story: When we launched Digestibly, they convinced us to price it at
          $29/month—'premium positioning' they said. But after seeing teachers, small business owners,
          and hardworking professionals who couldn't afford it, we realized we were just another expensive barrier to AI literacy.
        </p>
        <br />
        <p>
          So we made a radical decision: <b> Drop to $5.99/month </b> and put our mission on a Times Square billboard for the world to see.
          Our goal isn't profit—it's teaching one million people AI. And we're just getting started.
        </p>
      </div>
      <div className="image-section">
        <img src={image} alt="Our Story" />
      </div>
      <NavButton onClick={onClick} text="Next: Join the Movement →" />
    </div >
  );
};

export { OurStoryPage };
