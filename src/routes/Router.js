import {Route, Routes} from "react-router-dom";
import {ROUTE_NAMES} from "./routeNames";

import {PublicPage} from "../pages/PublicPage";
import {RegistrationFrom} from "../pages/Registration/component/RegistrationForm";
import {Products} from "../pages/Products";

export const Router = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<PublicPage/>}/>
            <Route path={ROUTE_NAMES.REGISTRATION} element={<RegistrationFrom/>}/>
            <Route path={ROUTE_NAMES.PRODUCTS} element={<Products/>}/>
        </Routes>
    )
};