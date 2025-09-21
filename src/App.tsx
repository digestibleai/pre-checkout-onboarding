import React from 'react';
import { useState } from 'react';
import { ProblemAgitationPage } from './pages/problem-agitation/problem-agitation-page'
import { PersonalCommitmentPage } from './pages/personal-commitment/personal-commitment-page';
import { SocialProofPage } from './pages/social-proof/social-proof-page';
import { ContentPreviewPage } from './pages/content-preview/content-preview-page';
import { ValuePropPage } from './pages/value-prop/value-prop-page';
import './fonts.css'
import './App.css'

const App = (): React.ReactNode => {
  const [goal, setGoal] = useState<string>('');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [displayPage, setDisplayPage] = useState<string>('problem-agitation');

  const handlePageChange = (newPage: string) => {
    if (newPage === displayPage) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setDisplayPage(newPage);
      setIsTransitioning(false);
    }, 500);
  };

  const redirect = () => {
    window.open('https://www.google.com', '_blank');
  }

  const renderPage = () => {
    switch (displayPage) {
      case 'problem-agitation':
        return <ProblemAgitationPage onClick={() => { handlePageChange('personal-commitment') }} />;
      case 'personal-commitment':
        return <PersonalCommitmentPage onClick={(userGoal: string) => {
          setGoal(userGoal);
          handlePageChange('social-proof');
        }} />;
      case 'social-proof':
        return <SocialProofPage onClick={() => { handlePageChange('content-preview') }} />;
      case 'content-preview':
        return <ContentPreviewPage onClick={() => { handlePageChange('value-prop') }} />;
      case 'value-prop':
        return <ValuePropPage onClick={redirect} goal={goal} />;
      default:
        return <></>;
    }
  }

  return (
    <div className={`page-container ${isTransitioning ? 'transitioning' : ''}`}>
      {renderPage()}
    </div>
  )
}

export { App };
