import { useSelector } from "react-redux";

import { ProductsLayout } from "../components/ProductsLayout";
import { ProductManagerSelector } from "../selectors";

import { useCart, usePagination } from "../../../hooks";

export const ProductsManagerContainer = () => {
  const { pokemonsList } = useSelector(ProductManagerSelector);

  const { page, handlePageChange } = usePagination();
  const { handleAddCard, handleRemoveCard, isDisabled } = useCart();

  return (
    <ProductsLayout
      handleAddCard={handleAddCard}
      handleRemoveCard={handleRemoveCard}
      isDisabled={isDisabled}
      pokemonsList={pokemonsList}
      page={page}
      handlePageChange={handlePageChange}
    />
  );
};
