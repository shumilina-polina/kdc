import { combineReducers } from "redux";
import AbilityReducer from "./AbilityReducer";

const RootReducer = combineReducers({
  ability: AbilityReducer,
});

export default RootReducer;
