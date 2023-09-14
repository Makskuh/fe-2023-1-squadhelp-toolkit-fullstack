import React from 'react';
import { Form, Formik, Field } from 'formik';
import styles from './EventsForm.module.sass';
import { createEvent } from '../../../store/slices/eventsSlice';
import { useDispatch } from 'react-redux';
import { EVENT_SCHEMA } from '../../../utils/validators/eventsValidatorSchema';
const initialState = {
  eventText: '',
  date: '',
  time: '',
  remind: '',
};
const getHours = new Date().getHours()
const getMinutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()
const EventsForm = (props) => {
  const dispatch = useDispatch();
  const submitHandler = (values, formikBag) => {
    dispatch(createEvent(values));
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialState}
      onSubmit={submitHandler}
      validationSchema={EVENT_SCHEMA}
    >
      <Form className={styles.eventsForm}>
        <label className={styles.titleField}>
          Event Text
          <Field
            name="eventText"
            placeholder="Event Text"
            className={styles.field}
            required
          />
        </label>
        <label className={styles.titleField}>
          Date of the Event
          <Field
            name="date"
            placeholder="Date to event"
            type="date"
            className={styles.field}
            required
          />
        </label>
        <label className={styles.titleField}>
          Event time
          <Field
            name="time"
            placeholder="Time to event"
            type="time"
            className={styles.field}
            required
            min={`${getHours}:${getMinutes}`}
          />
        </label>
        <label className={styles.titleField}>
          Remind to Event
          <Field
            name="remind"
            placeholder="Remind to event"
            type="number"
            min="0"
            max="60"
            className={styles.field}
            required
          />
        </label>
        <button type="submit" className={styles.submitBtn}>
          Add a new event
        </button>
      </Form>
    </Formik>
  );
};

export default EventsForm;
