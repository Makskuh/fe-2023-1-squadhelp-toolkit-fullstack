import React from 'react';
import { Form, Formik, Field } from 'formik';
import styles from './EventsForm.module.sass'
const initialState = {
  eventText: '',
  date: '',
  time: '',
  remind: ''
};

const EventsForm = ({ createEventsActions }) => {
  const submitHandler = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialState} onSubmit={submitHandler}>
      <Form className={styles.eventsForm}>
        <Field name='eventText' placeholder='Event Text'/>
        <Field name='date' placeholder='Date to event' type='date'/>
        <Field name='time' placeholder='Time to event' type='time'/>
        <Field name='remind' placeholder='Remind to event' type='time'/>
        <button type='submit'>Add a new event</button>
      </Form>
    </Formik>
  );
};



export default EventsForm;