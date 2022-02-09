import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  pokemonsList: [],
  isLoading: false,
  errors: null,
};

export const pokemonPageReducer = handleActions(
  {
    [actions.GET_POKEMON_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_POKEMON_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        pokemonsList: payload.response,
        isLoading: false,
      };
    },
    [actions.GET_POKEMON_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);
