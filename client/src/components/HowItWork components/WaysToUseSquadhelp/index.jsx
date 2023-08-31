import React from 'react';
import constants from '../../../constants';
import styles from './WaysToUseSquad.module.sass';
function WaysToUseSquadhelp(props) {
  return (
    <article className={styles.container}>
      <div className={styles.infoHeader}>
        <span className={styles.ourWorks}>Our Services</span>
        <h2 className={styles.title}>3 Ways To Use Squadhelp</h2>
        <p className={styles.infoUnderTitle}>
          Squadhelp offers 3 ways to get you a perfect name for your business.
        </p>
      </div>
      <section className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <div className={styles.imgWrapper}>
              <img src={`${constants.STATIC_IMAGES_PATH}/howitworks/launchContest.png`} alt='launchContest'/>
          </div>
          <h2 className={styles.cardTitle}>Launch a Contest</h2>
          <p className={styles.cardInfo}>Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.</p>
          <button className={styles.cardBtn}>Launch a Contest</button>
        </div>
        <div className={styles.cardWrapper}>
          <div className={styles.imgWrapper}>
              <img src={`${constants.STATIC_IMAGES_PATH}/howitworks/ExploreNames.png`} alt='launchContest'/>
          </div>
          <h2 className={styles.cardTitle}>Explore Names For Sale</h2>
          <p className={styles.cardInfo}>Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design</p>
          <button className={styles.cardBtn}>Explore Names For Sale</button>
        </div>
        <div className={styles.cardWrapper}>
          <div className={styles.imgWrapper}>
              <img src={`${constants.STATIC_IMAGES_PATH}/howitworks/AgencyLvl.png`} alt='launchContest'/>
          </div>
          <h2 className={styles.cardTitle}>Agency-level Managed Contests</h2>
          <p className={styles.cardInfo}>Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs</p>
          <button className={styles.cardBtn}>Learn More</button>
        </div>
      </section>
    </article>
  );
}

export default WaysToUseSquadhelp;
