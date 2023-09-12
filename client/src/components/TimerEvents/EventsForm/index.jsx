import React from 'react';
import { Form, Formik, Field } from 'formik';
import styles from './EventsForm.module.sass';
import { createEvent } from '../../../store/slices/eventsSlice';
import { useDispatch } from 'react-redux';

const initialState = {
  eventText: '',
  date: '',
  time: '',
  remind: '',
};

const EventsForm = (props) => {
  const dispatch = useDispatch();
  const submitHandler = (values, formikBag) => {
    dispatch(createEvent(values));
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialState} onSubmit={submitHandler}>
      <Form className={styles.eventsForm}>
        <label>
          Event Text
          <Field name="eventText" placeholder="Event Text" />
        </label>
        <label>
          Date to Event
          <Field name="date" placeholder="Date to event" type="date" />
        </label>
        <label>
          Time to Event
          <Field name="time" placeholder="Time to event" type="time"/>
        </label>
        <label>
          Remind me to Event
          <Field name="remind" placeholder="Remind to event" type="time" />
        </label>
        <button type="submit">Add a new event</button>
      </Form>
    </Formik>
  );
};

export default EventsForm;
