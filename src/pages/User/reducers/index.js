import { combineActions, handleActions } from "redux-actions";
import * as actions from "../actions";

const defaultState = {
  customerId: "",
  totalPrice: 0,
  quantity: 0,
  itemsInCart: [],
  isLoading: false,
  error: null,
};

export const orderPageReducer = handleActions(
  {
    [combineActions(actions.POST_ORDER_REQUEST, actions.GET_ORDER_REQUEST)]: (
      state
    ) => ({
      ...state,
      isLoading: true,
    }),
    [actions.POST_ORDER_SUCCESS]: (state) => {
      return {
        ...state,
      };
    },

    [actions.GET_ORDER_SUCCESS]: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
      };
    },
    [combineActions(actions.POST_ORDER_FAIL, actions.GET_ORDER_FAIL)]: (
      state,
      { payload }
    ) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);
