import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { useOpenCloseModal } from "../../../hooks";

import { authLoginSelector, getCartSelector } from "../selectors";

import { HeaderLayout } from "../components/HeaderLayout";
import { useEffect } from "react";
import { GET_CART_REQUEST } from "../../../pages/Cart/actions";

export const HeaderManagerContainer = () => {
  const dispatch = useDispatch();

  const { isAuth, userData, isLoading } = useSelector(authLoginSelector);

  const { cart } = useSelector(getCartSelector);

  const path = useLocation();

  const { open, handleOpen, handleClose, onLogOut } = useOpenCloseModal();
  useEffect(() => {
    dispatch(GET_CART_REQUEST());
  }, [dispatch]);

  useEffect(() => {
    handleClose();
  }, [isAuth, path.pathname]);
  return (
    <HeaderLayout
      open={open}
      userData={userData}
      cart={cart}
      dispatch={dispatch}
      isAuth={isAuth}
      isLoading={isLoading}
      onLogOut={onLogOut}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
};
