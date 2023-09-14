import * as yup from 'yup';
const today = new Date();
today.setHours(0, 0, 0, 0);

export const EVENT_SCHEMA = yup.object({
  eventText: yup.string().required(),
  date: yup.date().min(today, 'Date cannot be in the past').required(),
  time: yup.string().required(),
  remind: yup.number().required(),
});
