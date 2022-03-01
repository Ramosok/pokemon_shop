import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CartLayout } from "../components/CartLayout";

import { cartSelector } from "../selectors";
import { useCart } from "../../../hooks";

import { GET_CART_REQUEST } from "../actions";
import ErrorsBoundary from "../../../commonComponents/ErrorsBoundary";

export const CartManagerPage = () => {
  const dispatch = useDispatch();
  const { itemsInCart, totalPrice, customerId } = useSelector(cartSelector);

  const { handleRemoveCard, updatedItemQuantity, handleOrderSubmit } =
    useCart();
  useEffect(() => {
    dispatch(GET_CART_REQUEST());
  }, [dispatch]);

  return (
    <ErrorsBoundary>
      <CartLayout
        itemsInCart={itemsInCart}
        totalPrice={totalPrice}
        customerId={customerId}
        updatedItemQuantity={updatedItemQuantity}
        handleRemoveCard={handleRemoveCard}
        handleOrderSubmit={handleOrderSubmit}
      />
    </ErrorsBoundary>
  );
};
