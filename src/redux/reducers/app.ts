import { SET_SUB_MENU } from '../actions/app';
import { AppState } from '../types';

const defaultState: AppState = {
    subMenu: [],
};

const appReducer = (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_SUB_MENU:
            return {
                ...state,
                subMenu: payload,
            };

        default:
            return state;
    }
};

export default appReducer;
