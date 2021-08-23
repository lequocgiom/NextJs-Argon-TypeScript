import { SET_ACCOUNT } from '../actions/app';
import { AppState } from '../types';

const defaultState: AppState = {
    account: {},
};

const appReducer = (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_ACCOUNT:
            return {
                ...state,
                account: payload,
            };

        default:
            return state;
    }
};

export default appReducer;
