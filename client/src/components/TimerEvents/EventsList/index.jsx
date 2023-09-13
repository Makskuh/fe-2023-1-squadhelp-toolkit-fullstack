import React from 'react';
import styles from './EventsList.module.sass';
import { connect } from 'react-redux';
import EventItem from '../EventItem';
import constants from '../../../constants';
function EventsList({ events }) {
  return (
    <div className={styles.ListWrapper}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Event Timer</h1>
        <div className={styles.clockWrapper}>
          <img src={`${constants.STATIC_IMAGES_PATH}howitworks/timer.png`} alt="" />
          <p className={styles.remainingTime}>Remaining time</p>
        </div>
      </div>
      <ul className={styles.ulEvents}>
        {events.map((event) => (
          <EventItem event={event} key={event.id} />
        ))}
      </ul>
    </div>
  );
}

const mStP = (state) => ({
  events: state.event.events,
});

export default connect(mStP)(EventsList);
