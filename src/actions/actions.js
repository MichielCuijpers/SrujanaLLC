import { FETCH_EVENTS, CREATE_EVENT, SET_PAGE, SELECT_DATE } from '../Constants';
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
