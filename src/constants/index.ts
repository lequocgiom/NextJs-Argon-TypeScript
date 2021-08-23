export const MOBILE_WIDTH = 767;
export const STATIC_URL = process.env.APP_STATIC_URL || '';
export const DEFAULT_ITEMS_PER_PAGE = 10;
export const DEFAULT_ALL_VALUE = '0';

export const APP_ENV = process.env.APP_ENV;
export const IS_PRODUCTION = APP_ENV === 'production';
export const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PHONE_REGEX = /^[+0]{1,1}[0-9]{4,14}$/;
