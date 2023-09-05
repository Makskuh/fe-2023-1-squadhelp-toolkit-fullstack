import React from 'react';
import styles from './NamingContest.module.sass';
import constants from '../../../constants';
function NamingContestWork(props) {
  return (
    <article className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.imgCup}
            src={`${constants.STATIC_IMAGES_PATH}/howitworks/cup.png`}
            alt="cup"
          />
        </div>
        <h2 className={styles.title}>How Do Naming Contests Work?</h2>
      </div>
      <section className={styles.imgStepsContainer}>
        <div className={styles.wrapperWorkingMan}>
          <img
            className={styles.imgWorkingMan}
            src={`${constants.STATIC_IMAGES_PATH}/howitworks/support-man.svg`}
            alt="support-man"
          />
        </div>
        <ul className={styles.stepsWrapper}>
          <li className={styles.liStep}>
            <span className={styles.numberStep}>1.</span>
            <p className={styles.textStep}>
              Fill out your Naming Brief and begin receiving name ideas in
              minutes
            </p>
          </li>
          <li className={styles.liStep}>
            <span className={styles.numberStep}>2.</span>
            <p className={styles.textStep}>
              Rate the submissions and provide feedback to creatives. Creatives
              submit even more names based on your feedback.
            </p>
          </li>
          <li className={styles.liStep}>
            <span className={styles.numberStep}>3.</span>
            <p className={styles.textStep}>
              Our team helps you test your favorite names with your target
              audience. We also assist with Trademark screening.
            </p>
          </li>
          <li className={styles.liStep}>
            <span className={styles.numberStep}>4.</span>
            <p className={styles.textStep}>Pick a Winner. The winner gets paid for their submission.</p>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default NamingContestWork;
