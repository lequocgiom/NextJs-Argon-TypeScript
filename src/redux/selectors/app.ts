import { StoreState } from '../types';

export const accountSelector = (state: StoreState) => state.app.account;
