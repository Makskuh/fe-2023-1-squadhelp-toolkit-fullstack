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
            src={`${constants.STATIC_IMAGES_PATH}howitworks/forbes.png`}
            alt=""
          />
        </div>
        <div className={styles.wrapperImg}>
          <img
            src={`${constants.STATIC_IMAGES_PATH}howitworks/tnw.png`}
            alt=""
          />
        </div>
        <div className={styles.wrapperImg}>
          <img
            src={`${constants.STATIC_IMAGES_PATH}howitworks/chicago.png`}
            alt=""
          />
        </div>
        <div className={styles.wrapperImg}>
          <img
            src={`${constants.STATIC_IMAGES_PATH}howitworks/mash.png`}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedIn;
