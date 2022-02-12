import AuthService from "../services/authService";
import ProductsService from "../services/productsService";
import cartService from "../services/cartService";

import * as authRegistration from "../pages/Registration/actions";
import * as authActions from "../commonComponents/Login/actions";
import * as pokemonPageActions from "../pages/Products/actions";
import * as pokemonsDetailsActions from "../pages/ProductsDiteils/actions";
import * as cartPageActions from "../pages/Cart/actions";

export const apiCallMapping = (action) => {
  const actionCallMap = {
    [authRegistration.SIGN_UP_REQUEST]: AuthService.signUp,

    [authActions.SIGN_IN_REQUEST]: AuthService.signIn,

    [pokemonPageActions.GET_POKEMON_REQUEST]: ProductsService.getProducts,
    [pokemonsDetailsActions.GET_POKEMONS_DETAILS_REQUEST]:
      ProductsService.getProductDetails,

    [cartPageActions.GET_CART_REQUEST]: cartService.getCart,
    [cartPageActions.POST_CART_REQUEST]: cartService.addToCart,
    [cartPageActions.DELETE_CART_REQUEST]: cartService.removeFromCart,
  };

  if (!actionCallMap[action.type]) {
    throw new Error("Not Mapped Action");
  }
  return actionCallMap[action.type];
};
