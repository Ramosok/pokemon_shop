import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { CartLayout } from "../components/CartLayout";

import { GET_CART_REQUEST } from "../actions";

import { cartSelector } from "../selectors";

export const CartManagerPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(cartSelector);

  useEffect(() => {
    dispatch(GET_CART_REQUEST());
  }, [dispatch]);

  return <CartLayout cart={cart} />;
};
