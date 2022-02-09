import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  info: {},
  isLoading: false,
  errors: null,
};

export const pokemonsDetailsReducer = handleActions(
  {
    [actions.GET_POKEMONS_DETAILS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_POKEMONS_DETAILS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      info: payload.response,
    }),
    [actions.GET_POKEMONS_DETAILS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),
  },
  defaultState
);
