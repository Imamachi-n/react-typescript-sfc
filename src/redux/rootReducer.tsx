import { combineReducers } from "redux";

import todoReducer from "./todoReducer/reducer";

const rootReducer = combineReducers({
  todo: todoReducer
});

export default rootReducer;
