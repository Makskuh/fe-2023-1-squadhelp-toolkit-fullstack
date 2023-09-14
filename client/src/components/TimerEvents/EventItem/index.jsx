import React from 'react';
import styles from './EventItem.module.sass';
// import { deleteEvent, updateEvent } from '../../../store/slices/eventsSlice';
// import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
function EventItem({ event }) {
  const {
    events: { date, time, eventText, remind },
  } = event;
  const [timerTime, setTimerTime] = useState({});
  const [startTime, setCurrentTime] = useState(new Date().getTime());
  const [refDate, setRefDate] = useState(new Date(`${date}T${time}`).getTime());
  const [distance, setDistance] = useState(refDate - startTime);
  const fullTime = refDate - startTime;
  const getProgress = ((fullTime - distance) / fullTime) * 100;

  useEffect(() => {
    if (distance <= 0) {
      return setTimerTime(null);
    }
    const intervalEvents = setInterval(() => {
      setTimerTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
      setDistance(refDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(intervalEvents);
  }, [timerTime]);
  const reminder = !timerTime ? (
    <div className={styles.reminder}>End</div>
  ) : timerTime.days === 0 &&
    timerTime.hours === 0 &&
    timerTime.minutes <= remind ? (
    <div className={styles.reminder}>Less than {remind} minutes left</div>
  ) : (
    ''
  );
  const leftTime = !timerTime
    ? ''
    : `${timerTime.days ? timerTime.days + 'd' : ''} 
${timerTime.hours ? timerTime.hours + 'h' : ''} ${
        timerTime.minutes ? timerTime.minutes + 'm' : ''
      } ${
        timerTime.seconds &&
        timerTime.days <= 1 &&
        timerTime.hours <= 1 &&
        timerTime.minutes <= 10
          ? timerTime.seconds + 's'
          : ''
      }`;
  return (
    <li className={styles.liEvent}>
      <p className={styles.textEvent}>{eventText}</p>
      <p className={styles.leftTime}>{leftTime}</p>
      <div
        className={styles.progressBar}
        style={{ width: `${getProgress}%` }}
      ></div>
      {reminder}
      {/* <button
        className={styles.deleteBtn}
        onClick={() => dispatch(deleteEvent(event.id))}
      >
        X
      </button> */}
    </li>
  );
}

export default EventItem;
