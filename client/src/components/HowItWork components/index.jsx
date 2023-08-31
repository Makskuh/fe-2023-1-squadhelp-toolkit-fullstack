import React from 'react';
import styles from './HowItWorksBody.module.sass';
import HowDoesSquadhelpWork from './HowDoesSquadhelpWork';
import LaunchingContest from './LaunchingContest';
import NamingContestWork from './NamingContestWork';
import Questions from './Questions';
import WaysToUseSquadhelp from './WaysToUseSquadhelp';

function HowItWorksBody(props) {
  return (
    <div className={styles.container}>
      <HowDoesSquadhelpWork/>
      <WaysToUseSquadhelp/>
      <LaunchingContest/>
      <NamingContestWork/>
      <Questions/>
    </div>
  )
}

export default HowItWorksBody;
