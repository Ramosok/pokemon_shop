import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

import { PublicPage } from "../pages/PublicPage";
import { RegistrationFrom } from "../pages/Registration/component/RegistrationForm";
import { ProductsManagerContainer } from "../pages/Products/container/ProductsManagerContainer";
import { ProductsDetailsPageManager } from "../pages/ProductsDiteils/container/ProductsDetailsPageManager";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<PublicPage />} />
      <Route path={ROUTE_NAMES.REGISTRATION} element={<RegistrationFrom />} />
      <Route
        path={ROUTE_NAMES.PRODUCTS}
        element={<ProductsManagerContainer />}
      />
      <Route
        path={ROUTE_NAMES.PRODUCT_DETAILS}
        element={<ProductsDetailsPageManager />}
      />
    </Routes>
  );
};
