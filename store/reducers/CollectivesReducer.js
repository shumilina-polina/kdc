import { COLLECTIVES_PER_PAGE } from "services/config";
import { CollectivesActionTypes } from "store/actionTypes/CollectivesActionTypes";

const initialState = {
  total: 0,
  loading: true,
  collectives: [],
  offset: 0,
  filters: {
    trend: [],
    price: [],
    location: [],
  },
};

export const CollectivesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CollectivesActionTypes.FETCHING_COLLECTIVES:
      return {
        total: state.total,
        loading: true,
        collectives: state.collectives,
        offset: state.offset + COLLECTIVES_PER_PAGE,
        filters: state.filters,
      };
    case CollectivesActionTypes.UPDATE_COLLECTIVES:
      return {
        total: action.payload.total,
        loading: false,
        collectives: action.payload.collectives,
        offset: state.offset,
        filters: state.filters,
      };
    case CollectivesActionTypes.UPDATE_FILTERS:
      return {
        total: state.total,
        loading: true,
        collectives: [],
        offset: 0,
        filters: action.payload,
      };
    default:
      return state;
  }
};
