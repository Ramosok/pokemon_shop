import { useSelector } from "react-redux";

import { ProductsLayout } from "../components/ProductsLayout";
import { ProductManagerSelector } from "../selectors";

import { useCart, usePagination } from "../../../hooks";
import { authLoginSelector } from "../../Registration/selectors";

export const ProductsManagerContainer = () => {
  const { pokemonsList } = useSelector(ProductManagerSelector);
  const { isAuth } = useSelector(authLoginSelector);

  const { page, handlePageChange } = usePagination();
  const { disabled, handleAddCard, handleRemoveCard } = useCart({});
  return (
    <ProductsLayout
      disabled={disabled}
      handleAddCard={handleAddCard}
      handleRemoveCard={handleRemoveCard}
      isAuth={isAuth}
      pokemonsList={pokemonsList}
      page={page}
      handlePageChange={handlePageChange}
    />
  );
};
