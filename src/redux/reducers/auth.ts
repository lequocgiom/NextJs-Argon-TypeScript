// import { LOCAL_STORAGE_KEY } from 'src/constants';
// import { SET_USER_INFO, LOG_OUT, SET_ACCOUNT } from '../actions/auth';
// import { AuthState } from '../types';

// const defaultState: AuthState = {
//     uid: '',
//     useCampaigns: [],
//     phone: '',
//     fullName: '',
//     avatar: '',
//     accounts: [],
// };

// const authReducer = (state = defaultState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case SET_USER_INFO:
//             return {
//                 ...state,
//                 ...payload,
//             };
//         case SET_ACCOUNT:
//             const account = state.accounts?.find(i => i.id === payload);
//             localStorage.setItem(LOCAL_STORAGE_KEY.ZBA_ACCOUNT, JSON.stringify(account));
//             return {
//                 ...state,
//                 account,
//             };
//         case LOG_OUT:
//             return {
//                 ...defaultState,
//             };

//         default:
//             return state;
//     }
// };

// export default authReducer;
export {};
