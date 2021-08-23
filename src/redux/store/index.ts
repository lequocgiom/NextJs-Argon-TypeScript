import { applyMiddleware, compose, createStore } from 'redux';
import { IS_PRODUCTION } from 'src/constants';
import RootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

declare const window: Window &
    typeof globalThis & {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    };

const configureStore = () => {
    const composeWithDevTools =
        !IS_PRODUCTION &&
        typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : compose;

    const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
    return createStore(RootReducer, composedEnhancer);
};

const store = configureStore();

export default store;
