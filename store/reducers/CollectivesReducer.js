import { CollectivesActionTypes } from "store/actionTypes/CollectivesActionTypes";

const initialState = {
  collectives: [],
  loading: true,
};

export const CollectivesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CollectivesActionTypes.FETCH_COLLECTIVES:
      return {
        loading: true,
        collectives: [],
      };
    case CollectivesActionTypes.FETCH_COLLECTIVES_SUCCESS:
      return {
        loading: false,
        collectives: action.payload,
      };
    default:
      return state;
  }
};
