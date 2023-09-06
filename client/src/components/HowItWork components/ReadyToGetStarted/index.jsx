import React from 'react';
import styles from './GetStarted.module.sass';
function GetStarted() {
  return (
    <article className={styles.container}>
      <div className={styles.backgroungImg}>
        <h2 className={styles.titleGetStarted}>Ready to get started?</h2>
        <p className={styles.textGetStarted}>
          Fill out your contest brief and begin receiving custom name
          suggestions within minutes.
        </p>
        <button className={styles.startBtn}>Start A Contest</button>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <p>
            <span className={styles.cardInfo}>4.9 out of 5 stars</span> from
            25,000+ customers.
          </p>
        </div>
        <div className={styles.cardWrapper}>
          <p>
            Our branding community stands
            <span className={styles.cardImportantInfo}>200,000+</span> strong.
          </p>
        </div>
        <div className={styles.cardWrapper}>
          <p>
            <span className={styles.cardImportantInfo}>140+ Industries</span>
            supported across more than
            <span className={styles.cardImportantInfo}>85 countries</span> – and
            counting.
          </p>
        </div>
      </div>
    </article>
  );
}

export default GetStarted;
