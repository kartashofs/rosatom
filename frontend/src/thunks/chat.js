import { chatApi } from '../api/chat';
import { slice } from '../slices/chat';

const getContacts = () => async (dispatch) => {
  const response = await chatApi.getContacts({});

  dispatch(slice.actions.getContacts(response));
};

const getThreads = () => async (dispatch) => {
  const response = await chatApi.getThreads();

  dispatch(slice.actions.getThreads(response));
};

const getThread = (params) => async (dispatch) => {
  const response = await chatApi.getThread(params);

  dispatch(slice.actions.getThread(response));

  return response?.id;
};

const markThreadAsSeen = (params) => async (dispatch) => {
  await chatApi.markThreadAsSeen(params);

  dispatch(slice.actions.markThreadAsSeen(params.threadId));
};

const setCurrentThread = (params) => (dispatch) => {
  dispatch(slice.actions.setCurrentThread(params.threadId));
};

const addMessage = (params) => async (dispatch) => {
  const response = await chatApi.addMessage(params);

  dispatch(slice.actions.addMessage(response));

  return response.threadId;
};

export const thunks = {
  addMessage,
  getContacts,
  getThread,
  getThreads,
  markThreadAsSeen,
  setCurrentThread,
};
