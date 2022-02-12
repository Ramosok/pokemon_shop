import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { useOpenCloseModal } from "../../../hooks";

import { authLoginSelector, getCartSelector } from "../selectors";

import { HeaderLayout } from "../components/HeaderLayout";

export const HeaderManagerContainer = () => {
  const dispatch = useDispatch();

  const { isAuth, userData, isLoading } = useSelector(authLoginSelector);

  const { cart } = useSelector(getCartSelector);

  const path = useLocation();

  const { open, handleOpen, handleClose, onLogOut } = useOpenCloseModal();

  return (
    <HeaderLayout
      path={path}
      open={open}
      isAuth={isAuth}
      isLoading={isLoading}
      userData={userData}
      cart={cart}
      dispatch={dispatch}
      onLogOut={onLogOut}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
};
