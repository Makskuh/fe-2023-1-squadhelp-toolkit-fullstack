import React from 'react';
import constants from '../../../constants';
import styles from './HowDoesSquad.module.sass';

function HowDoesSquadhelpWork() {
  return (
    <article className={styles.container}>
      <section className={styles.infoWrapper}>
        <span className={styles.namingPlatform}>
          World's #1 Naming Platform
        </span>
        <h1 className={styles.title}>How Does Squadhelp Work?</h1>
        <p className={styles.platformInfo}>
          Squadhelp helps you come up with a great name for your business by
          combining the power of crowdsourcing with sophisticated technology and
          Agency-level validation services.
        </p>
        <button href='#' className={styles.btnPlayVideo}> ▶︎   Play Video</button>
      </section>
      <div className={styles.imageWrapper}>
        <img
          src={`${constants.STATIC_IMAGES_PATH}howitworks/support-man.png`}
          alt='support-man'
          className={styles.imgSupportMan}
        />
      </div>
    </article>
  );
}

export default HowDoesSquadhelpWork;
