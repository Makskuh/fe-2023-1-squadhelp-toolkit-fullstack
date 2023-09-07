import React from 'react';
import styles from './HowItWorksBody.module.sass';
import HowDoesSquadhelpWork from './HowDoesSquadhelpWork';
import LaunchingContest from './LaunchingContest';
import NamingContestWork from './NamingContestWork';
import Questions from './Questions';
import WaysToUseSquadhelp from './WaysToUseSquadhelp';
import GetStarted from './ReadyToGetStarted';
import FeaturedIn from './FeaturedIn';
function HowItWorksBody(props) {
  return (
    <div className={styles.container}>
      <HowDoesSquadhelpWork/>
      <WaysToUseSquadhelp/>
      <NamingContestWork/>
      <LaunchingContest/>
      <GetStarted/>
      <Questions/>
      <FeaturedIn/>
    </div>
  )
}

export default HowItWorksBody;
