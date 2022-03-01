import AuthService from "../services/authService";
import ProductsService from "../services/productsService";
import cartService from "../services/cartService";
import orderService from "../services/orderService";

import * as authRegistration from "../pages/Registration/actions";
import * as authActions from "../commonComponents/Login/actions";
import * as pokemonPageActions from "../pages/Products/actions";
import * as pokemonsDetailsActions from "../pages/ProductsDiteils/actions";

import * as orderUserActions from "../pages/User/actions";
import * as cartPageActions from "../pages/Cart/actions";

export const apiCallMapping = (action) => {
  const actionCallMap = {
    [authRegistration.SIGN_UP_REQUEST]: AuthService.signUp,

    [authActions.SIGN_IN_REQUEST]: AuthService.signIn,

    [pokemonPageActions.GET_POKEMON_REQUEST]: ProductsService.getProducts,
    [pokemonsDetailsActions.GET_POKEMONS_DETAILS_REQUEST]:
      ProductsService.getProductDetails,

    [cartPageActions.GET_CART_REQUEST]: cartService.getCart,
    [cartPageActions.ADD_TO_CART_REQUEST]: cartService.addToCart,
    [cartPageActions.PATCH_TO_CART_REQUEST]: cartService.patchToCart,
    [cartPageActions.DELETE_CART_REQUEST]: cartService.removeFromCart,
    [orderUserActions.POST_ORDER_REQUEST]: orderService.postOrder,
    [orderUserActions.GET_ORDER_REQUEST]: orderService.getOrder,
  };

  if (!actionCallMap[action.type]) {
    throw new Error("Not Mapped Action");
  }
  return actionCallMap[action.type];
};
