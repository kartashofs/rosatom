import { kanbanApi } from '../api/kanban';
import { slice } from '../slices/kanban';

const getBoard = () => async (dispatch) => {
  const data = await kanbanApi.getBoard();

  dispatch(slice.actions.getBoard(data));
};

const createColumn = (params) => async (dispatch) => {
  const response = await kanbanApi.createColumn(params);

  dispatch(slice.actions.createColumn(response));
};

const updateColumn = (params) => async (dispatch) => {
  const response = await kanbanApi.updateColumn(params);

  dispatch(slice.actions.updateColumn(response));
};

const clearColumn = (params) => async (dispatch) => {
  await kanbanApi.clearColumn(params);

  dispatch(slice.actions.clearColumn(params.columnId));
};

const deleteColumn = (params) => async (dispatch) => {
  await kanbanApi.deleteColumn(params);

  dispatch(slice.actions.deleteColumn(params.columnId));
};

const createTask = (params) => async (dispatch) => {
  const response = await kanbanApi.createTask(params);

  dispatch(slice.actions.createTask(response));
};

const updateTask = (params) => async (dispatch) => {
  const response = await kanbanApi.updateTask(params);

  dispatch(slice.actions.updateTask(response));
};

const moveTask = (params) => async (dispatch) => {
  await kanbanApi.moveTask(params);

  dispatch(slice.actions.moveTask(params));
};

const deleteTask = (params) => async (dispatch) => {
  await kanbanApi.deleteTask(params);

  dispatch(slice.actions.deleteTask(params.taskId));
};

const addComment = (params) => async (dispatch) => {
  const response = await kanbanApi.addComment(params);

  dispatch(
    slice.actions.addComment({
      taskId: params.taskId,
      comment: response,
    }),
  );
};

const addChecklist = (params) => async (dispatch) => {
  const response = await kanbanApi.addChecklist(params);

  dispatch(
    slice.actions.addChecklist({
      taskId: params.taskId,
      checklist: response,
    }),
  );
};

const updateChecklist = (params) => async (dispatch) => {
  const response = await kanbanApi.updateChecklist(params);

  dispatch(
    slice.actions.updateChecklist({
      taskId: params.taskId,
      checklist: response,
    }),
  );
};

const deleteChecklist = (params) => async (dispatch) => {
  await kanbanApi.deleteChecklist(params);

  dispatch(slice.actions.deleteChecklist(params));
};

const addCheckItem = (params) => async (dispatch) => {
  const response = await kanbanApi.addCheckItem(params);

  dispatch(
    slice.actions.addCheckItem({
      taskId: params.taskId,
      checklistId: params.checklistId,
      checkItem: response,
    }),
  );
};

const updateCheckItem = (params) => async (dispatch) => {
  const response = await kanbanApi.updateCheckItem(params);

  dispatch(
    slice.actions.updateCheckItem({
      taskId: params.taskId,
      checklistId: params.checklistId,
      checkItem: response,
    }),
  );
};

const deleteCheckItem = (params) => async (dispatch) => {
  await kanbanApi.deleteCheckItem(params);

  dispatch(slice.actions.deleteCheckItem(params));
};

export const thunks = {
  addCheckItem,
  addChecklist,
  addComment,
  clearColumn,
  createColumn,
  createTask,
  deleteCheckItem,
  deleteChecklist,
  deleteColumn,
  deleteTask,
  getBoard,
  moveTask,
  updateCheckItem,
  updateChecklist,
  updateColumn,
  updateTask,
};
