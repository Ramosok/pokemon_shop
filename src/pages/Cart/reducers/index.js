import {handleActions} from "redux-actions";

import * as actions from "../actions";

const defaultState = {
    cart: [],
    isLoading: false,
    errors: null,
};

export const getCartReducer = handleActions(
    {
        [actions.GET_CART_REQUEST]: (state) => ({
            ...state,
            isLoading: true,

        }),
        [actions.GET_CART_SUCCESS]: (state, {payload}) => {
            return {
                ...state,
                cart: payload.response,
                isLoading: false,
            };
        },
        [actions.GET_CART_FAIL]: (state, {payload}) => ({
            ...state,
            isLoading: false,
            errors: payload.response,
        }),
    },
    defaultState
);
export const addCartReducer = handleActions(
    {
        [actions.POST_CART_REQUEST]: (state, {payload}) => ({
            ...state,
            cart: payload,
            isLoading: true,

        }),
        [actions.POST_CART_SUCCESS]: (state) => {
            return {
                ...state,
                isLoading: false,
            };
        },
        [actions.POST_CART_FAIL]: (state, {payload}) => ({
            ...state,
            isLoading: false,
            errors: payload.response,
        }),
    },
    defaultState
);

export const deleteCartReducer = handleActions(
    {
        [actions.DELETE_CART_REQUEST]: (state, {payload}) => ({
            ...state,
            cart: payload,
            isLoading: true,

        }),
        [actions.DELETE_CART_SUCCESS]: (state) => {
            return {
                ...state,
                isLoading: false,
            };
        },
        [actions.DELETE_CART_FAIL]: (state, {payload}) => ({
            ...state,
            isLoading: false,
            errors: payload.response,
        }),
    },
    defaultState
);