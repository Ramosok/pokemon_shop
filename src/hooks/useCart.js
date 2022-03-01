import { useDispatch, useSelector } from "react-redux";

import { useCallback } from "react";
import {
  DELETE_CART_REQUEST,
  GET_CART_REQUEST,
  ADD_TO_CART_REQUEST,
  PATCH_TO_CART_REQUEST,
} from "../pages/Cart/actions";
import { POST_ORDER_REQUEST } from "../pages/User/actions";

import { getCartSelector } from "../commonComponents/Header/selectors";

export const useCart = () => {
  const dispatch = useDispatch();

  const { itemsInCart } = useSelector(getCartSelector);

  const isDisabled = useCallback(
    (id) => {
      return !!itemsInCart.find((product) => product.id === id);
    },
    [itemsInCart]
  );

  const onGetCart = useCallback(() => {
    dispatch(GET_CART_REQUEST());
  }, [dispatch]);

  const handleAddCard = useCallback(
    ({ id, name, image, price }) => {
      const item = {
        id,
        name,
        image,
        quantity: 1,
        price,
      };
      dispatch(ADD_TO_CART_REQUEST(item));
    },
    [dispatch]
  );
  const handleRemoveCard = useCallback(
    (id) => {
      dispatch(DELETE_CART_REQUEST(id));
    },
    [dispatch]
  );
  const updatedItemQuantity = useCallback(
    ({ id, quantity }) => {
      if (quantity >= 1) {
        dispatch(PATCH_TO_CART_REQUEST({ id, quantity }));
      }
    },
    [dispatch]
  );
  const handleOrderSubmit = useCallback(
    ({ customerId, totalPrice, itemsInCart }) => {
      dispatch(POST_ORDER_REQUEST({ customerId, totalPrice, itemsInCart }));
    },
    [dispatch]
  );
  return {
    onGetCart,
    handleAddCard,
    handleRemoveCard,
    handleOrderSubmit,
    updatedItemQuantity,
    isDisabled,
  };
};
