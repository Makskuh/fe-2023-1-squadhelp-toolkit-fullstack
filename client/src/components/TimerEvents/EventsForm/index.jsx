import React from 'react';
import { connect } from 'react-redux';
import { Form, Formik, Field } from 'formik';
const initialState = {
  eventText: '',
  date: '',
  time: '',
  remind: ''
};

const EventsForm = ({ createTaskAction }) => {
  const submitHandler = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialState} onSubmit={submitHandler}>
      <Form>
        <Field name='eventText' />
        <Field name='date'/>
        <Field name='time'/>
        <Field name='remind'/>
        <button type='submit'>Add a new event</button>
      </Form>
    </Formik>
  );
};

const mDtP = (dispatch) => ({
  createTaskAction: (taskText) => dispatch(),
});

export default connect(null, mDtP)(EventsForm);