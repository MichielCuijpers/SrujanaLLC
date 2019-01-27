import actions from '../actions/actions';
import { CREATE_EVENT, DELETE_EVENT } from '../Constants';

const eventCreated = ({ type }) => type ===`${CREATE_EVENT}_FULFILLED`;
const eventDeleted = ({ type }) => type ===`${DELETE_EVENT}_FULFILLED`;

export const eventMiddleware = (store) => (next) => (action) => {
    if (eventCreated(action) || eventDeleted(action)) {
        store.dispatch(actions.fetchEvents());
    }
    next(action);
};
