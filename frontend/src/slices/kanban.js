import { createSlice } from '@reduxjs/toolkit';
import { objFromArray } from '../utils/obj-from-array';

const initialState = {
  isLoaded: false,
  columns: {
    byId: {},
    allIds: [],
  },
  tasks: {
    byId: {},
    allIds: [],
  },
  members: {
    byId: {},
    allIds: [],
  },
};

const reducers = {
  getBoard(state, action) {
    const board = action.payload;

    state.columns.byId = objFromArray(board.columns);
    state.columns.allIds = Object.keys(state.columns.byId);
    state.tasks.byId = objFromArray(board.tasks);
    state.tasks.allIds = Object.keys(state.tasks.byId);
    state.members.byId = objFromArray(board.members);
    state.members.allIds = Object.keys(state.members.byId);
    state.isLoaded = true;
  },
  createColumn(state, action) {
    const column = action.payload;

    state.columns.byId[column.id] = column;
    state.columns.allIds.push(column.id);
  },
  updateColumn(state, action) {
    const column = action.payload;

    state.columns.byId[column.id] = column;
  },
  clearColumn(state, action) {
    const columnId = action.payload;

    // taskIds to be removed
    const { taskIds } = state.columns.byId[columnId];

    // Delete the taskIds references from the column
    state.columns.byId[columnId].taskIds = [];

    // Delete the tasks from state
    taskIds.forEach((taskId) => {
      delete state.tasks.byId[taskId];
    });

    state.tasks.allIds = state.tasks.allIds.filter((taskId) =>
      taskIds.includes(taskId),
    );
  },
  deleteColumn(state, action) {
    const columnId = action.payload;

    delete state.columns.byId[columnId];
    state.columns.allIds = state.columns.allIds.filter(
      (_columnId) => _columnId !== columnId,
    );
  },
  createTask(state, action) {
    const task = action.payload;

    state.tasks.byId[task.id] = task;
    state.tasks.allIds.push(task.id);

    // Add the taskId reference to the column
    state.columns.byId[task.columnId].taskIds.push(task.id);
  },
  updateTask(state, action) {
    const task = action.payload;

    Object.assign(state.tasks.byId[task.id], task);
  },
  moveTask(state, action) {
    const { taskId, position, columnId } = action.payload;
    const sourceColumnId = state.tasks.byId[taskId].columnId;

    // Remove task from source column
    state.columns.byId[sourceColumnId].taskIds = state.columns.byId[
      sourceColumnId
    ].taskIds.filter((_taskId) => _taskId !== taskId);

    // If columnId exists, it means that we have to add the task to the new column
    if (columnId) {
      // Change task's columnId reference
      state.tasks.byId[taskId].columnId = columnId;
      // Push the taskId to the specified position
      state.columns.byId[columnId].taskIds.splice(position, 0, taskId);
    } else {
      // Push the taskId to the specified position
      state.columns.byId[sourceColumnId].taskIds.splice(position, 0, taskId);
    }
  },
  deleteTask(state, action) {
    const taskId = action.payload;
    const { columnId } = state.tasks.byId[taskId];

    delete state.tasks.byId[taskId];
    state.tasks.allIds = state.tasks.allIds.filter(
      (_taskId) => _taskId !== taskId,
    );
    state.columns.byId[columnId].taskIds = state.columns.byId[
      columnId
    ].taskIds.filter((_taskId) => _taskId !== taskId);
  },
  addComment(state, action) {
    const { taskId, comment } = action.payload;
    const task = state.tasks.byId[taskId];

    task.comments.push(comment);
  },
  addChecklist(state, action) {
    const { taskId, checklist } = action.payload;
    const task = state.tasks.byId[taskId];

    task.checklists.push(checklist);
  },
  updateChecklist(state, action) {
    const { taskId, checklist } = action.payload;
    const task = state.tasks.byId[taskId];

    task.checklists = task.checklists.map((_checklist) => {
      if (_checklist.id === checklist.id) {
        return checklist;
      }

      return _checklist;
    });
  },
  deleteChecklist(state, action) {
    const { taskId, checklistId } = action.payload;
    const task = state.tasks.byId[taskId];

    task.checklists = task.checklists.filter(
      (checklist) => checklist.id !== checklistId,
    );
  },
  addCheckItem(state, action) {
    const { taskId, checklistId, checkItem } = action.payload;
    const task = state.tasks.byId[taskId];
    const checklist = task.checklists.find(
      (checklist) => checklist.id === checklistId,
    );

    if (!checklist) {
      return;
    }

    checklist.checkItems.push(checkItem);
  },
  updateCheckItem(state, action) {
    const { taskId, checklistId, checkItem } = action.payload;
    const task = state.tasks.byId[taskId];
    const checklist = task.checklists.find(
      (checklist) => checklist.id === checklistId,
    );

    if (!checklist) {
      return;
    }

    checklist.checkItems = checklist.checkItems.map((_checkItem) => {
      if (_checkItem.id === checkItem.id) {
        return checkItem;
      }

      return _checkItem;
    });
  },
  deleteCheckItem(state, action) {
    const { taskId, checklistId, checkItemId } = action.payload;
    const task = state.tasks.byId[taskId];
    const checklist = task.checklists.find(
      (_checklist) => _checklist.id === checklistId,
    );

    if (!checklist) {
      return;
    }

    checklist.checkItems = checklist.checkItems.filter(
      (checkItem) => checkItem.id !== checkItemId,
    );
  },
};

export const slice = createSlice({
  name: 'kanban',
  initialState,
  reducers,
});

export const { reducer } = slice;
