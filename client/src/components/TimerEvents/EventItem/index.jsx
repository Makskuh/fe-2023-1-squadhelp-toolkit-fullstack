import React from 'react';
import styles from '../EventsList/EventsList.module.sass';
import { deleteEvent, updateEvent } from '../../../store/slices/eventsSlice';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function EventItem({ event, id }) {
  const [timerTime, setTimerTime] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const countDownDate = new Date(
      event.events.date + 'T' + event.events.time
    ).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const intervalEvents = setInterval(function () {
      if (distance < 0) {
        return;
      }
      setTimerTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => {
      clearInterval(intervalEvents);
    };
  });

  return (
    <li className={styles.liEvent}>
      <p>{event.events.eventText}</p>
      <span>{`${timerTime.days}d ${timerTime.hours}h ${timerTime.minutes}m ${timerTime.seconds}s`}</span>
      <button onClick={() => dispatch(deleteEvent(event.id))}>
        Delete event
      </button>
    </li>
  );
}

export default EventItem;
