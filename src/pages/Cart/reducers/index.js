import { handleActions, combineActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  customerId: "",
  totalPrice: 0,
  quantity: 0,
  itemsInCart: [],
  isLoading: false,
  error: null,
};

export const cartReducer = handleActions(
  {
    [combineActions(
      actions.GET_CART_REQUEST,
      actions.ADD_TO_CART_REQUEST,
      actions.PATCH_TO_CART_REQUEST,
      actions.DELETE_CART_REQUEST
    )]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.GET_CART_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        customerId: payload.response.customerId,
        totalPrice: payload.response.totalPrice,
        quantity: payload.response.quantity,
        itemsInCart: payload.response.itemsList,
        isLoading: false,
      };
    },

    [actions.ADD_TO_CART_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        itemsInCart: payload.response?.itemsList,
        quantity: payload.response.quantity,
        totalPrice: payload.response.totalPrice,
      };
    },

    [actions.PATCH_TO_CART_SUCCESS]: (state, { payload }) => {
      const { cartState, updatedItem } = payload.response;
      const copyProductList = [...state.itemsInCart];
      const foundProduct = copyProductList.find(
        (product) => product.id === updatedItem.id
      );
      foundProduct.quantity = updatedItem.quantity;
      return {
        ...state,
        ...cartState,
        itemsInCart: copyProductList,
        isLoading: false,
      };
    },

    [actions.DELETE_CART_SUCCESS]: (state, { payload }) => {
      const { cartState, removedItemId } = payload.response;

      const copyProductList = [...state.itemsInCart];

      const productIndex = copyProductList.findIndex(
        (product) => product.id === removedItemId
      );
      copyProductList.splice(productIndex, 1);
      return {
        ...state,
        ...cartState,
        itemsInCart: copyProductList,
        isLoading: false,
      };
    },
    [combineActions(
      actions.GET_CART_FAIL,
      actions.ADD_TO_CART_FAIL,
      actions.PATCH_TO_CART_FAIL,
      actions.DELETE_CART_FAIL
    )]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);
