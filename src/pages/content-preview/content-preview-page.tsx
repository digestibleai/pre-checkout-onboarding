import React from 'react';
import { NavButton } from '../../components/nav-button/nav-button';
import '../../fonts.css';
import '../../index.css';
import image from '../../assets/content-preview.png';
import './content-preview-page.css';

interface ContentPreviewPageProps {
  onClick: () => void;
}

const ContentPreviewPage = ({ onClick }: ContentPreviewPageProps): React.ReactNode => {
  return (
    <div className="content-preview-container">
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
          <img src={image} alt="Content Preview" />
        </div>
      </div>
      <div className="button-section">
        <NavButton onClick={onClick} text="Next: What You'll Master →" />
      </div>
    </div>
  );
};

export { ContentPreviewPage };
