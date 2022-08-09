import { UPDATE_ACTIVE_MENU } from "store/actionTypes/HeaderActionTypes"

const initialState = {
    active: "",
}

const HeaderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_ACTIVE_MENU:
            return {
                active: payload
            }
        default:
            return state
    }
}

export default HeaderReducer