import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import {
  DELETE_CART_REQUEST,
  GET_CART_REQUEST,
  POST_CART_REQUEST,
} from "../pages/Cart/actions";

export const useCart = () => {
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(false);

  const handleAddCard = useCallback(
    (id, name, image, price) => {
      const item = {
        id: id,
        name: name,
        image: image,
        quantity: 1,
        price: price,
      };
      dispatch(POST_CART_REQUEST(item));
      dispatch(GET_CART_REQUEST());
      setDisabled(true);
    },
    [dispatch]
  );
  const handleRemoveCard = useCallback(
    (id) => {
      dispatch(DELETE_CART_REQUEST(id));
      dispatch(GET_CART_REQUEST());
      setDisabled(false);
    },
    [dispatch]
  );
  return {
    disabled,
    handleAddCard,
    handleRemoveCard,
  };
};
