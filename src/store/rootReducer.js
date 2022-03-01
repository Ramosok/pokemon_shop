import { combineReducers } from "redux";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import { authReducerRegistration } from "../pages/Registration/reducers";
import { authReducer } from "../commonComponents/Login/reducers";
import { pokemonPageReducer } from "../pages/Products/reducers";
import { pokemonsDetailsReducer } from "../pages/ProductsDiteils/reducers";
import { cartReducer } from "../pages/Cart/reducers";
import { orderPageReducer } from "../pages/User/reducers";

const authBlackListedFields = createBlacklistFilter("auth", [
  "isLoading",
  "errors",
]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  transforms: [authBlackListedFields],
};

const rootReducer = combineReducers({
  auth: authReducer,
  authRegistration: authReducerRegistration,
  pokemonPage: pokemonPageReducer,
  pokemonsDetails: pokemonsDetailsReducer,
  cart: cartReducer,
  order: orderPageReducer,
});

export default persistReducer(persistConfig, rootReducer);
