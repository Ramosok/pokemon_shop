import * as authRegistration from "../pages/Registration/actions";
import * as authActions from "../commonComponents/Login/actions";
import * as pokemonPageActions from "../pages/Products/actions";

import AuthService from "../services/authService"
import ProductsService from "../services/productsService";


export const apiCallMapping = (action) => {
    const actionCallMap = {
        [authRegistration.SIGN_UP_REQUEST]: AuthService.signUp,

        [authActions.SIGN_IN_REQUEST]: AuthService.signIn,

        [pokemonPageActions.GET_POKEMON_REQUEST]: ProductsService.getProducts,
    };
    if (!actionCallMap[action.type]) {
        throw new Error('Not Mapped Action')
    }
    return actionCallMap[action.type];
};
