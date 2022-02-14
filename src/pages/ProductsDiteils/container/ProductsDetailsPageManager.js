import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { useCart } from "../../../hooks";

import { pokemonsDetailsSelector } from "../selectors";

import { ProductsDetailsLayout } from "../components/ProductsDetailsLayout";

import { GET_POKEMONS_DETAILS_REQUEST } from "../actions";

export const ProductsDetailsPageManager = () => {
  const dispatch = useDispatch();
  const { info } = useSelector(pokemonsDetailsSelector);
  const { id } = useParams();
  const { disabled, handleAddCard, handleRemoveCard } = useCart({});

  useEffect(() => {
    dispatch(GET_POKEMONS_DETAILS_REQUEST(id));
  }, [dispatch, id]);

  return (
    <ProductsDetailsLayout
      info={info}
      disabled={disabled}
      handleAddCard={handleAddCard}
      handleRemoveCard={handleRemoveCard}
    />
  );
};
