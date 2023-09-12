import * as yup from 'yup';

export const TODO_TASK_SCHEMA = yup.object({
  eventText: yup.required(),
  date: yup.date.min(new Date.now()).required(),
  time: yup.required().positive(),
  remind: ''
});