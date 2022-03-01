import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { useCart } from "../../../hooks";

import { pokemonsDetailsSelector } from "../selectors";

import { ProductsDetailsLayout } from "../components/ProductsDetailsLayout";

import { GET_POKEMONS_DETAILS_REQUEST } from "../actions";

export const ProductsDetailsPageManager = () => {
  const dispatch = useDispatch();
  const { info, isLoading } = useSelector(pokemonsDetailsSelector);
  const { id } = useParams();
  const { handleAddCard, handleRemoveCard, isDisabled } = useCart();

  useEffect(() => {
    dispatch(GET_POKEMONS_DETAILS_REQUEST(id));
  }, [dispatch, id]);

  return (
    <ProductsDetailsLayout
      info={info}
      isDisabled={isDisabled}
      isLoading={isLoading}
      handleAddCard={handleAddCard}
      handleRemoveCard={handleRemoveCard}
    />
  );
};
