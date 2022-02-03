import {handleActions} from "redux-actions";

import * as actions from '../actions';

const defaultState = {
    userData: {},
    isRegistration: false,
    errors: [],
}
export const authReducerRegistration = handleActions({
        [actions.SIGN_UP_REQUEST]: (state) => {
            return {
                ...state
            }
        },
        [actions.SIGN_UP_SUCCESS]: (state, {payload}) => {
            return {
                ...state,
                userData: payload.actionPayload,
                isRegistration: true,
            };
        },
        [actions.SIGN_UP_FAIL]: (state, {payload}) => {
            const {response, actionPayload} = payload
            return {
                ...state,
                userData: actionPayload,
                isRegistration: false,
                errors: response.data.message,
            }
        }
    },
    defaultState
);
