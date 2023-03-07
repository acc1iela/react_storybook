import { configureStore, createSlice } from '@reduxjs/toolkit';

const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

const TaskBoxDate = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
};

const TasksSlice = createSlice({
  name: 'taskbox',
  initialState: TaskBoxDate,
  reducers: {
    updateTaskState: (state, action) => {
      const { taskId, taskState } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task >= 0) {
        task.state = taskState;
      }
    },
  },
});

export const { updateTaskState } = TasksSlice.actions;

const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
  },
});

export default store;
