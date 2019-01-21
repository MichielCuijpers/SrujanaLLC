import { SELECT_DATE, FETCH_EVENTS, CREATE_EVENT } from '../Constants';
import { originalEvents } from '../Constants';

const initialState = {
    events: originalEvents,
    eventDate: new Date()
};

export default function eventReducer(state = initialState, action) {
    switch (action.type) {
        case `${FETCH_EVENTS}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                events: action.payload
            }
            case `${FETCH_EVENTS}_REJECTED`:
            return {
                ...state,
                fetching: false,
                events: originalEvents
            }
        case `${FETCH_EVENTS}_PENDING`:
            return {
                ...state,
                fetching: true
            }
        case `${CREATE_EVENT}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${CREATE_EVENT}_REJECTED`:
        case `${CREATE_EVENT}_FULFILLED`:
            return {
                ...state,
                loading: false
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
