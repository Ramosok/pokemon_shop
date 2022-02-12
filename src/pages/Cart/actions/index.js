import { createAction } from "redux-actions";

export const GET_CART_REQUEST = createAction("GET_CART_REQUEST");
export const GET_CART_SUCCESS = createAction("GET_CART_SUCCESS");
export const GET_CART_FAIL = createAction("GET_CART_FAIL");


export const POST_CART_REQUEST = createAction("POST_CART_REQUEST");
export const POST_CART_SUCCESS = createAction("POST_CART_SUCCESS");
export const POST_CART_FAIL = createAction("POST_CART_FAIL");

export const DELETE_CART_REQUEST = createAction("DELETE_CART_REQUEST");
export const DELETE_CART_SUCCESS = createAction("DELETE_CART_SUCCESS");
export const DELETE_CART_FAIL = createAction("DELETE_CART_FAIL");
