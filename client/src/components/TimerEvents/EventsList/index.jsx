import React from 'react';
import styles from './EventsList.module.sass';
import { connect, useDispatch } from 'react-redux';
import { deleteEvent, updateEvent } from '../../../store/slices/eventsSlice';
import EventItem from '../EventItem';
function EventsList({ events }) {
  return (
    <div className={styles.ListWrapper}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Live upcomming checks</h1>
        <p className={styles.remainingTime}>
          Remaining time
        </p>
      </div>
      <ul className={styles.ulEvents}>
        {events.map((event) => (
          <EventItem event={event} key={event.id}/>
        ))}
      </ul>
    </div>
  );
}

const mStP = (state) => ({
  events: state.event.events,
});

export default connect(mStP)(EventsList);
