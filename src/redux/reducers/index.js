import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import account from "./accountReducer";

export default combineReducers({
  auth,
  alert,
  account,
});
