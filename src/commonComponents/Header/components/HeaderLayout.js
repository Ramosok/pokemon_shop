import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Loader } from "../../Loader";
import { NavBarListHref } from "./NavBarListHref";
import { LoginForm } from "../../Login/component/LoginForm";

import { Modal, Box } from "@mui/material";

import { GET_CART_REQUEST } from "../../../pages/Cart/actions";
import { ROUTE_NAMES } from "../../../routes/routeNames";

import { hrefConfig } from "../hrefConfig";

import styles from "../header.module.scss";

export const HeaderLayout = ({
  path,
  cart,
  dispatch,
  onLogOut,
  isAuth,
  isLoading,
  userData,
  open,
  handleOpen,
  handleClose,
}) => {
  useEffect(() => {
    handleClose();
  }, [isAuth, path.pathname, handleClose]);

  useEffect(() => {
    if (isAuth) {
      dispatch(GET_CART_REQUEST());
    }
  }, [cart, dispatch, isAuth]);

  return isLoading ? (
    <Loader />
  ) : (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logo} to={ROUTE_NAMES.HOME}>
          Pokemons <span>Store</span>
        </Link>
        <div className={styles.user_action_container}>
          {!isAuth && (
            <Link to="#" className={styles.closing_button} onClick={handleOpen}>
              Registration/Login
            </Link>
          )}
          <Modal className={styles.modal} open={open} onClose={handleClose}>
            <Box sx={{ width: 600, height: 600 }}>
              <LoginForm />
            </Box>
          </Modal>
          {isAuth && (
            <div>
              <h3 className={styles.user_name}>Hi {userData.firstName}</h3>
              <button className={styles.logout_btn} onClick={onLogOut}>
                LogOut
              </button>
            </div>
          )}
          <Link to={ROUTE_NAMES.CART}>
            {isAuth && (
              <div className={styles.shoping_cart}>
                {cart.itemsList?.length !== 0 && (
                  <div className={styles.shoping_cart_length}>
                    {cart.itemsList?.length}
                  </div>
                )}
              </div>
            )}
          </Link>
        </div>
      </div>
      <div className={styles.navbar}>
        {isAuth && (
          <Link className={styles.closing_button} to={ROUTE_NAMES.PRODUCTS}>
            <span>Pokemons Shop</span>
          </Link>
        )}
        <Link className={styles.closing_button} to={ROUTE_NAMES.HOME}>
          <span>Home</span>
        </Link>
        {hrefConfig.map(({ title, href }) => (
          <NavBarListHref key={title} title={title} href={href} />
        ))}
      </div>
    </header>
  );
};
