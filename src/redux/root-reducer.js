import { store, reducer, combineReducers } from "redux";
import userReducer from "./user/user-reducer";

export default combineReducers({
  user: userReducer,
});