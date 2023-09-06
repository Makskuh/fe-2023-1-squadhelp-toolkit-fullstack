import React from 'react';
import styles from './Launching.module.sass';
import NavBarContest from './NavBarContest';
import ListItem from './ListItem';
import { useState } from 'react';
import launchingContestData from './ListItem/dataForLaunchingContest';

function LaunchingContest(props) {
  const [dataLaunching, setDataLaunching] = useState(
    launchingContestData.map((value) => ({ ...value, isOpen: false }))
  );
  const handleClick = (index) => {
    const dataWithOpenContests = dataLaunching.map((value, ind) => {
      return {
        ...value,
        isOpen: index === ind ? !value.isOpen : value.isOpen,
      };
    });
    setDataLaunching(dataWithOpenContests);
  };
  return (
    <article className={styles.container}>
      <NavBarContest />
      <div className={styles.ulWrapper}>
        <h2 className={styles.titleLaunching}>Launching A Contest</h2>
        <ListItem dataContest={dataLaunching} handleClick={handleClick} />
      </div>
    </article>
  );
}

export default LaunchingContest;
