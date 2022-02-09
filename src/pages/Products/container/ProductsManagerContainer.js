import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductsLayout } from "../components/ProductsLayout";
import { ProductManagerSelector } from "../selectors";
import { GET_POKEMON_REQUEST } from "../actions";

export const ProductsManagerContainer = () => {
  const dispatch = useDispatch();
  const { pokemonsList } = useSelector(ProductManagerSelector);

  const initialPage = localStorage.getItem("page");

  const [page, setPage] = useState(initialPage || 1);

  const handlePageChange = useCallback((_, page) => {
    setPage(page);
  }, []);

  useEffect(() => {
    dispatch(GET_POKEMON_REQUEST(page));
    return () => {
      localStorage.setItem("page", page);
    };
  }, [dispatch, page]);

  return (
    <ProductsLayout
      pokemonsList={pokemonsList}
      page={page}
      handlePageChange={handlePageChange}
    />
  );
};
