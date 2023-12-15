import GeneralReducer from "./general/reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  GeneralReducer,
});

export default rootReducer;
