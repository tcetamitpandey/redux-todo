import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {  title: "Go To Gym", state: "Pending" },
    {  title: "Eat healthy food", state: "Completed" },
    {  title: "Watch Movie", state: "Pending" },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,

  reducers: {

    addTodo: (state, action) => {
      state.value.push(action.payload); 
    },

    removeTodo: (state, action) => {
      const indexToRemove = action.payload;
      
      state.value = state.value.filter((todo, index) => index !== indexToRemove);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
