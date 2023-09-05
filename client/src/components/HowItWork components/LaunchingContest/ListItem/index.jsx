import React from 'react';
import launchingContestData from './dataForLaunchingContest';
import styles from '../Launching.module.sass';

function ListItem() {
  launchingContestData.map((value, index) => {
    return <li key={index} className={styles.liItem}>
      
    </li>;
  });

  return <div>ListItem</div>;
}

export default ListItem;
