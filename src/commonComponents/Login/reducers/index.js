import {handleActions} from "redux-actions";
import {LOCAL_STORAGE_KEYS, LOCAL_STORAGE_USERNAME} from "../../../constants/localStorageData";

import *as actions from '../actions';

const defaultState = {
    isLoading: false,
    errors: null,
    userData: {},
    isAuth: false,
    accessToken: null
}

export const authReducer = handleActions({
        [actions.SIGN_IN_REQUEST]: (state) => ({
            ...state,
            isLoading: true,
            errors: null,
        }),
        [actions.SIGN_IN_SUCCESS]: (state, {payload}) => {
            const {accessToken, ...userData} = payload.response;
            localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
            localStorage.setItem(LOCAL_STORAGE_USERNAME.USER_NAME, userData.firstName);
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                userData,
                accessToken,
            };
        },
        [actions.SIGN_IN_FAIL]: (state, {payload}) => ({
            ...state,
            isLoading: false,
            errors: payload.response,
        })
    },
    defaultState
);