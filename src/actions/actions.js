import { FETCH_EVENTS, SET_PAGE, SELECT_DATE } from '../Constants';
import * as service from '../services';

const actions = {
    fetchEvents: () => ({
        type: FETCH_EVENTS,
        payload: service.fetchEvents()
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
