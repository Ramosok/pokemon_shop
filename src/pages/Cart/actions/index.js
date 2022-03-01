import { createAction } from "redux-actions";

export const GET_CART_REQUEST = createAction("GET_CART_REQUEST");
export const GET_CART_SUCCESS = createAction("GET_CART_SUCCESS");
export const GET_CART_FAIL = createAction("GET_CART_FAIL");

export const ADD_TO_CART_REQUEST = createAction("ADD_TO_CART_REQUEST");
export const ADD_TO_CART_SUCCESS = createAction("ADD_TO_CART_SUCCESS");
export const ADD_TO_CART_FAIL = createAction("ADD_TO_CART_FAIL");

export const PATCH_TO_CART_REQUEST = createAction("PATCH_TO_CART_REQUEST");
export const PATCH_TO_CART_SUCCESS = createAction("PATCH_TO_CART_SUCCESS");
export const PATCH_TO_CART_FAIL = createAction("PATCH_TO_CART_FAIL");

export const DELETE_CART_REQUEST = createAction("DELETE_CART_REQUEST");
export const DELETE_CART_SUCCESS = createAction("DELETE_CART_SUCCESS");
export const DELETE_CART_FAIL = createAction("DELETE_CART_FAIL");
