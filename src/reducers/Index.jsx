import { combineReducers } from "redux";
import someReducer from "./SomeReducer";

const rootReducer = combineReducers({
  someState: someReducer,
});

export default rootReducer;
