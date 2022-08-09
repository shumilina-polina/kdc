import { combineReducers } from "redux";
import AbilityReducer from "./AbilityReducer";
import HeaderReducer from "./HeaderReducer";

const RootReducer = combineReducers({
  ability: AbilityReducer,
  header: HeaderReducer,
});

export default RootReducer;
