import React from 'react';
import styles from '../EventsList/EventsList.module.sass';
// import { deleteEvent, updateEvent } from '../../../store/slices/eventsSlice';
import { useState, useEffect } from 'react';
function EventItem({ event, id }) {
  const {
    events: { date, time, eventText },
  } = event;
  const [timerTime, setTimerTime] = useState({});
  const [startTime, setCurrentTime] = useState(new Date().getTime());
  const [refDate, setRefDate] = useState(new Date(`${date}T${time}`).getTime());
  const [progressBar, setProgressBar] = useState({ width: '0' });
  const [distance, setDistance] = useState(refDate - startTime);
  const fullTime = refDate - startTime;
  const getProgress = ((fullTime - distance) / fullTime) * 100;
  const now = new Date().getTime();
  useEffect(() => {
    if (distance < 0) {
      setProgressBar({ width: '100%' });
      return setTimerTime(null);
    }
    setProgressBar({ width: `${getProgress}%` });
    const intervalEvents = setInterval(() => {
      setDistance(refDate - now);
      setTimerTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(intervalEvents);
  }, [timerTime]);
  const leftTime = !timerTime ? (
    <span className={styles.endLeftTime}>End</span>
  ) : (
    <p className={styles.leftTime}>{`${
      timerTime.days ? timerTime.days + 'd' : ''
    } ${timerTime.hours ? timerTime.hours + 'h' : ''} ${
      timerTime.minutes ? timerTime.minutes + 'm' : ''
    } ${timerTime.seconds ? timerTime.seconds + 's' : ''}`}</p>
  );
  return (
    <li className={styles.liEvent}>
      <p className={styles.textEvent}>{eventText}</p>
      {leftTime}
      <div className={styles.progressBar} style={progressBar}></div>
      {/* <button onClick={() => dispatch(deleteEvent(event.id))}>Delete</button> */}
    </li>
  );
}

export default EventItem;
