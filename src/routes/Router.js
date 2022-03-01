import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTE_NAMES } from "./routeNames";

import { PublicPage } from "../pages/PublicPage";
import { RegistrationFrom } from "../pages/Registration/component/RegistrationForm";
import { ProductsManagerContainer } from "../pages/Products/container/ProductsManagerContainer";
import { ProductsDetailsPageManager } from "../pages/ProductsDiteils/container/ProductsDetailsPageManager";
import { CartManagerPage } from "../pages/Cart/conteiners/CartManagerPage";
import { UserManagerLayout } from "../pages/User/containers/UserManagerLayout";
import { authLoginSelector } from "../pages/Registration/selectors";

export const Router = () => {
  const { isAuth } = useSelector(authLoginSelector);
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<PublicPage />} />
      <Route path={ROUTE_NAMES.REGISTRATION} element={<RegistrationFrom />} />
      <Route path={ROUTE_NAMES.NOTFOUND} element={<PublicPage />} />
      {isAuth && (
        <>
          <Route
            path={ROUTE_NAMES.PRODUCTS}
            element={<ProductsManagerContainer />}
          />
          <Route
            path={ROUTE_NAMES.PRODUCT_DETAILS}
            element={<ProductsDetailsPageManager />}
          />
          <Route path={ROUTE_NAMES.CART} element={<CartManagerPage />} />
          <Route path={ROUTE_NAMES.USER} element={<UserManagerLayout />} />
        </>
      )}
    </Routes>
  );
};
