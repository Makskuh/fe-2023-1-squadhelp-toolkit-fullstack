import React from 'react';
import styles from './HowItWorksBody.module.sass';
import HowDoesSquadhelpWork from './HowDoesSquadhelpWork';
import LaunchingContest from './LaunchingContest';
import NamingContestWork from './NamingContestWork';
import Questions from './Questions';
import WaysToUseSquadhelp from './WaysToUseSquadhelp';
import GetStarted from './ReadyToGetStarted';
function HowItWorksBody(props) {
  return (
    <div className={styles.container}>
      <HowDoesSquadhelpWork/>
      <WaysToUseSquadhelp/>
      <NamingContestWork/>
      <LaunchingContest/>
      <GetStarted/>
      <Questions/>
    </div>
  )
}

export default HowItWorksBody;
