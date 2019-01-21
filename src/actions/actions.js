import { FETCH_EVENTS, CREATE_EVENT, SET_PAGE, SELECT_DATE, DELETE_EVENT } from '../Constants';
import * as service from '../services';

const actions = {
    fetchEvents: () => ({
        type: FETCH_EVENTS,
        payload: service.fetchEvents()
    }),
    createEvent: (event) => ({
        type: CREATE_EVENT,
        payload: service.createEvent(event)
    }),
    deleteEvent: (eventId) => ({
        type: DELETE_EVENT,
        payload: service.deleteEvent(eventId)
    }),
    setPage: (selectedPage) => ({
        type: SET_PAGE,
        payload: selectedPage
    }),
    selectDate: (date) => ({
        type: SELECT_DATE,
        payload: date
    }),
};

export default actions;
