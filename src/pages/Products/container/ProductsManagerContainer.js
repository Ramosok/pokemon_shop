import { useSelector } from "react-redux";

import { ProductsLayout } from "../components/ProductsLayout";
import { ProductManagerSelector } from "../selectors";

import { usePagination } from "../../../hooks";
import { authLoginSelector } from "../../Registration/selectors";

export const ProductsManagerContainer = () => {
  const { pokemonsList } = useSelector(ProductManagerSelector);
  const { isAuth } = useSelector(authLoginSelector);

  const { page, handlePageChange } = usePagination();

  return (
    <ProductsLayout
      isAuth={isAuth}
      pokemonsList={pokemonsList}
      page={page}
      handlePageChange={handlePageChange}
    />
  );
};
