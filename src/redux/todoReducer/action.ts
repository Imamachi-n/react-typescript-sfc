// Constants
export const CREATE_TODO = 'CREATE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// Action Creater
export const createTodo = (message: string) => ({
  type: CREATE_TODO as typeof CREATE_TODO,
  message,
});

export const addTodo = (message: string) => ({
  type: ADD_TODO as typeof ADD_TODO,
  message,
});

export const updateTodo = (message: string) => ({
  type: UPDATE_TODO as typeof UPDATE_TODO,
  message,
});

export const deleteTodo = () => ({
  type: DELETE_TODO as typeof DELETE_TODO,
});
