import { VISUALLY_IMPAIRED_VERSION_SWITCH } from "store/actionTypes/AbilityActionType";

const initialState = {
  visuallyImpairedVersion: false,
};

const AbilityReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VISUALLY_IMPAIRED_VERSION_SWITCH:
      return {
        visuallyImpairedVersion: payload,
      };
    default:
      return state;
  }
};

export default AbilityReducer;
