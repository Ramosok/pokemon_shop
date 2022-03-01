import { createAction } from "redux-actions";

export const POST_ORDER_REQUEST = createAction("POST_ORDER_REQUEST");
export const POST_ORDER_SUCCESS = createAction("POST_ORDER_SUCCESS");
export const POST_ORDER_FAIL = createAction("POST_ORDER_FAIL");

export const GET_ORDER_REQUEST = createAction("GET_ORDER_REQUEST");
export const GET_ORDER_SUCCESS = createAction("GET_ORDER_SUCCESS");
export const GET_ORDER_FAIL = createAction("GET_ORDER_FAIL");
