import React from 'react';
import styles from './EventsList.module.sass';
import { connect, useDispatch } from 'react-redux';
import { deleteEvent, updateEvent } from '../../../store/slices/eventsSlice';

function EventsList({ events }) {
  const dispatch = useDispatch();
  const eventsList = events.map((event) => (
    <li key={event.id} className={styles.liEvent}>
      <p>{event.events.eventText}</p>
      <span>{event.events.time}</span>
      <span>{event.events.date}</span>
      <button onClick={() => dispatch(deleteEvent(event.id))}>
        Delete event
      </button>
    </li>
  ));
  return (
    <div className={styles.ListWrapper}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Live upcomming checks</h1>
        <p className={styles.remainingTime}>
          <span>
            <img src="" alt="" />
          </span>{' '}
          Remaining time
        </p>
      </div>
      <ul className={styles.ulEvents}>{eventsList}</ul>
    </div>
  );
}

const mStP = (state) => ({
  events: state.event.events,
});

export default connect(mStP)(EventsList);
