import { PAGE_NAME, SET_PAGE, VALIDATE_ADMIN } from '../Constants';

const initialState = {
    currentPage: PAGE_NAME.HOME
};

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PAGE:
            return {
                currentPage: action.payload
            }
        case `${VALIDATE_ADMIN}_FULFILLED`:
            return {
                currentPage: PAGE_NAME.ADMIN
            }
        default:
            return state;
    }
}
