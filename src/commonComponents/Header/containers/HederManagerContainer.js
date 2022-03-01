import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { useOpenCloseModal } from "../../../hooks";

import { authLoginSelector, getCartSelector } from "../selectors";

import { HeaderLayout } from "../components/HeaderLayout";
import { useEffect } from "react";

export const HeaderManagerContainer = () => {
  const dispatch = useDispatch();

  const { isAuth, userData, isLoading } = useSelector(authLoginSelector);

  const { itemsInCart } = useSelector(getCartSelector);

  const path = useLocation();

  const { open, handleOpen, handleClose, onLogOut } = useOpenCloseModal();

  useEffect(() => {
    handleClose();
  }, [handleClose, isAuth, path.pathname]);
  return (
    <HeaderLayout
      open={open}
      userData={userData}
      itemsInCart={itemsInCart}
      dispatch={dispatch}
      isAuth={isAuth}
      isLoading={isLoading}
      onLogOut={onLogOut}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
};
