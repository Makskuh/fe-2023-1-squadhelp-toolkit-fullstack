import React from 'react';
import styles from './Questions.module.sass';
import constants from '../../../constants';

function Questions(props) {
  return (
    <article className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.payInfo}>
          <h3 className={styles.titleInfo}>
            Pay a Fraction of cost vs hiring an agency
          </h3>
          <p className={styles.textInfo}>
            For as low as $199, our naming contests and marketplace allow you to
            get an amazing brand quickly and affordably.
          </p>
        </div>
        <div className={styles.payInfo}>
          <h3 className={styles.titleInfo}>Satisfaction Guarantee</h3>
          <p className={styles.textInfo}>
            Of course! We have policies in place to ensure that you are
            satisfied with your experience.{' '}
            <a className={styles.learnMore} href="">
              Learn more
            </a>
          </p>
        </div>
      </div>
      <div className={styles.containerQuestons}>
        <h2 className={styles.titleQuestion}>Questions?</h2>
        <p className={styles.questionInfo}>
          Speak with a Squadhelp platform expert to learn more and get your
          questions answered.
        </p>
        <a href="" className={styles.consultationLink}>
          Shedule Consultation
        </a>
        <a tel="8773553585" className={styles.phone}>
          <img
          className={styles.phoneImg}
            src={`${constants.STATIC_IMAGES_PATH}howitworks/phone_icon.svg`}
          ></img>
          (877) 355-3585
        </a>
        <span className={styles.infoCall}>Call us for assistance</span>
      </div>
    </article>
  );
}

export default Questions;
