import React from 'react';
import styles from './Featured.module.sass';
import constants from '../../../constants';

function FeaturedIn() {
  return (
    <section className={styles.container}>
      <div className={styles.featuredInWrapper}>
        <p className={styles.featuredIn}>Featured In</p>
      </div>
      <div className={styles.imgWrapper}>
        <div className={styles.wrapperImg}>
          <img
            className={styles.img}
            src={`${constants.STATIC_IMAGES_PATH}howitworks/forbes.png`}
            alt="forbes"
          />
        </div>
        <div className={styles.wrapperImg}>
          <img
            className={styles.img}
            src={`${constants.STATIC_IMAGES_PATH}howitworks/tnw.png`}
            alt="tnw"
          />
        </div>
        <div className={styles.wrapperImg}>
          <img
            className={styles.img}
            src={`${constants.STATIC_IMAGES_PATH}howitworks/chicago.png`}
            alt="chicago"
          />
        </div>
        <div className={styles.wrapperImg}>
          <img
            className={styles.img}
            src={`${constants.STATIC_IMAGES_PATH}howitworks/mash.png`}
            alt="mash"
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedIn;
