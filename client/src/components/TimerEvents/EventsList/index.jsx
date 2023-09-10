import React from 'react';
import styles from './EventsList.module.sass'
function EventsList() {
  return (
    <div className={styles.ListWrapper}>
      <div className={styles.titleWrapper}>
      <h1 className={styles.title}>Live upcomming checks</h1>
      <p className={styles.remainingTime}><span><img src="" alt="" /></span> Remaining time</p>
      </div>
      <ul className={styles.ulEvents}>
        <li className={styles.liEvent}><p>Server uptime check</p><p>25:50</p></li>
      </ul>
    </div>
  );
}

export default EventsList;
