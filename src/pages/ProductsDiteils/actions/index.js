import { createAction } from "redux-actions";

export const GET_POKEMONS_DETAILS_REQUEST = createAction(
  "GET_POKEMONS_DETAILS_REQUEST"
);
export const GET_POKEMONS_DETAILS_SUCCESS = createAction(
  "GET_POKEMONS_DETAILS_SUCCESS"
);
export const GET_POKEMONS_DETAILS_FAIL = createAction(
  "GET_POKEMONS_DETAILS_FAIL"
);
