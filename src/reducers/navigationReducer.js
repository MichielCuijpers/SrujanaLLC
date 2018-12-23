import { PAGE_NAME, SET_PAGE } from '../Constants';

const initialState = {
    currentPage: PAGE_NAME.HOME
};

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PAGE:
            return {
                currentPage: action.payload
            }
        default:
            return state;
    }
}
