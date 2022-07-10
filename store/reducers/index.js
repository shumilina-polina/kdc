import { combineReducers } from "redux";
import { CollectivesReducer } from "./CollectivesReducer";

export const RootReducer = combineReducers({
  collectives: CollectivesReducer,
});
