import React from 'react';
import styles from '../Launching.module.sass';
function NavBarContest(props) {
  return (
    <ul className={styles.navUlContainer}>
      <li className={styles.listNav}>
        <a className={styles.navLink} href="#">
          Launching A Contest
        </a>
      </li>
      <li className={styles.listNav}>
        <a className={styles.navLink} href="#">
          Buying From Marketplace
        </a>
      </li>
      <li className={styles.listNav}>
        <a className={styles.navLink} href="#">
          Managed Contests
        </a>
      </li>
      <li className={styles.listNav}>
        <a className={styles.navLink} href="#">
          For Creatives
        </a>
      </li>
    </ul>
  );
}

export default NavBarContest;
