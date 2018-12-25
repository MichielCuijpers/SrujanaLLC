import { SELECT_DATE, FETCH_EVENTS } from '../Constants';
import { originalEvents } from '../Constants';

const initialState = {
    events: originalEvents,
    eventDate: new Date()
};

export default function createEventReducer(state = initialState, action) {
    switch (action.type) {
        case `${FETCH_EVENTS}_FULFILLED`:
            return {
                ...state,
                events: action.payload
            }
        case SELECT_DATE:
            return {
                ...state,
                eventDate: action.payload
            }
        default:
            return state;
    }
}
