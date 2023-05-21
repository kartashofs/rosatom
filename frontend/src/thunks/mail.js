import { mailApi } from '../api/mail';
import { slice } from '../slices/mail';

const getLabels = () => async (dispatch) => {
  const response = await mailApi.getLabels();

  dispatch(slice.actions.getLabels(response));
};

const getEmails = (params) => async (dispatch) => {
  const response = await mailApi.getEmails(params);

  dispatch(slice.actions.getEmails(response));
};

const getEmail = (params) => async (dispatch) => {
  const response = await mailApi.getEmail(params);

  dispatch(slice.actions.getEmail(response));
};

export const thunks = {
  getEmail,
  getEmails,
  getLabels,
};
