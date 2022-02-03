import {combineReducers} from "redux";
import {authReducerRegistration} from "../pages/Registration/reducers";
import {authReducer} from "../commonComponents/Login/reducers";
import {pokemonPageReducer} from "../pages/Products/reducers";


export const rootReducer = combineReducers({
    authRegistration: authReducerRegistration,
    auth: authReducer,
    pokemonPage: pokemonPageReducer,

})
