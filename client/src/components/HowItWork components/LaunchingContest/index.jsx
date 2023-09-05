import React from 'react';
import styles from './Launching.module.sass';

const listLaunching = <li>hello</li>

function LaunchingContest(props) {
  return (
    <article className={styles.container}>
      <ul className={styles.navUlContainer}>
        <li className={styles.listNav}>
          <a className={styles.navLink} href="#">Launching A Contest</a>
        </li>
        <li className={styles.listNav}>
          <a className={styles.navLink} href="#">Buying From Marketplace</a>
        </li>
        <li className={styles.listNav}>
          <a className={styles.navLink} href="#">Managed Contests</a>
        </li>
        <li className={styles.listNav}>
          <a className={styles.navLink} href="#">For Creatives</a>
        </li>
      </ul>
      <div className={styles.ulWrapper}>
        <h2 className={styles.titleLaunching}>Launching A Contest</h2>
        <ul>{listLaunching}</ul>
      </div>
    </article>
  );
}

export default LaunchingContest;
