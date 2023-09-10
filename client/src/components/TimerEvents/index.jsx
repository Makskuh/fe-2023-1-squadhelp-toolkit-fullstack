import React from 'react';
import styles from './TimerEvents.module.sass';
import EventsForm from './EventsForm';
import EventsList from './EventsList';

function TimerEvents(props) {
  return (
    <article className={styles.container}>
      <EventsList />
      <EventsForm />
    </article>
  );
}

export default TimerEvents;
