import { Reducer } from "redux";
import {
  CREATE_TODO,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  createTodo,
  addTodo,
  updateTodo,
  deleteTodo
} from "./action";

// Type
type Action = ReturnType<
  typeof createTodo | typeof addTodo | typeof updateTodo | typeof deleteTodo
>;
type State = {
  id: number;
  message: string;
  todoList: string[];
};

// Initial State
const initialState = {
  id: 1,
  message: "",
  todoList: []
};

// Reducer
const manageTodoList: Reducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CREATE_TODO: {
      return {
        ...state,
        message: action.message
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        message: action.message
      };
    }
    case UPDATE_TODO: {
      return {
        ...state,
        message: action.message
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        message: ""
      };
    }
    default: {
      const _: never = action; // eslint-disable-line
      return state;
    }
  }
};

export default manageTodoList;
