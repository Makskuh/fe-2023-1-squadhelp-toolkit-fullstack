import { createSlice } from '@reduxjs/toolkit';

const TIMER_EVENTS = 'todo';

const initialState = {
  events: []
}

const eventSlice = createSlice({
  name: TIMER_EVENTS,
  initialState,
  reducers: {
    createEvent: (state, action) => {
      const newEvent = {
        id: Date.now(),
        body: action.payload,
      }
      state.events.push(newEvent)
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
    updateEvent: (state, action) => {
      const { payload: { id, newValues } } = action;
      const eventIndex = state.events.findIndex(event => event.id === id);

      for (const [key, value] of Object.entries(newValues)) {
        state.events[eventIndex][key] = value;
      }
    }
  }
});

const { reducer: eventReducer, actions } = eventSlice;

export const { createEvent, updateEvent, deleteEvent } = actions;

export default eventReducer;