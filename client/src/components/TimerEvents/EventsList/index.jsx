import React from 'react';
import styles from './EventsList.module.sass';
import { connect } from 'react-redux';
import EventItem from '../EventItem';
import constants from '../../../constants';
function EventsList({ events }) {
  const sortEvents = events.slice(0).sort((a, b) => {
    const dateBefore = new Date(`${a.events.date}T${a.events.time}`);
    const dateAfter = new Date(`${b.events.date}T${b.events.time}`);
    return dateBefore - dateAfter;
  });
  return (
    <div className={styles.listWrapper}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Event Timer</h1>
        <div className={styles.clockWrapper}>
          <img
            src={`${constants.STATIC_IMAGES_PATH}howitworks/timer.png`}
            alt=""
          />
          <p className={styles.remainingTime}>Remaining time</p>
        </div>
      </div>
      <ul className={styles.ulEvents}>
        {sortEvents.map((event) => (
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
