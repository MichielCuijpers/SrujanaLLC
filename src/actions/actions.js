import { SET_PAGE } from '../Constants';

const actions = {
    setPage: (selectedPage) => ({
        type: SET_PAGE,
        payload: selectedPage
    }),
};

export default actions;
