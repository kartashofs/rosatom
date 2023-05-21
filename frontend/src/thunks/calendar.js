import { calendarApi } from '../api/calendar';
import { slice } from '../slices/calendar';

const getEvents = () => async (dispatch) => {
  const response = await calendarApi.getEvents();

  dispatch(slice.actions.getEvents(response));
};

const createEvent = (params) => async (dispatch) => {
  const response = await calendarApi.createEvent(params);

  dispatch(slice.actions.createEvent(response));
};

const updateEvent = (params) => async (dispatch) => {
  const response = await calendarApi.updateEvent(params);

  dispatch(slice.actions.updateEvent(response));
};

const deleteEvent = (params) => async (dispatch) => {
  await calendarApi.deleteEvent(params);

  dispatch(slice.actions.deleteEvent(params.eventId));
};

export const thunks = {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
};
