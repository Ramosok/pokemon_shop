import { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes, { arrayOf } from "prop-types";

import { Loader } from "../../Loader";
import { NavBarListHref } from "./NavBarListHref";
import { LoginForm } from "../../Login/component/LoginForm";
import { Cart } from "./Cart";

import { Modal, Box } from "@mui/material";

import { ROUTE_NAMES } from "../../../routes/routeNames";

import { navTabsConfig } from "../navTabsConfig";

import styles from "../header.module.scss";

export const HeaderLayout = memo(
  ({
    itemsInCart,
    userData,
    isAuth,
    isLoading,
    open,
    onLogOut,
    handleOpen,
    handleClose,
  }) => {
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
              <Link
                to="#"
                className={styles.closing_button}
                onClick={handleOpen}
              >
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
                <Link to={ROUTE_NAMES.USER}>
                  <h3 className={styles.user_name}>Hi {userData.firstName}</h3>
                </Link>
                <button className={styles.logout_btn} onClick={onLogOut}>
                  LogOut
                </button>
              </div>
            )}
            <Link to={ROUTE_NAMES.CART}>
              {isAuth && <Cart itemsInCart={itemsInCart} />}
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
          {navTabsConfig.map(({ title, href }) => (
            <NavBarListHref key={title} title={title} href={href} />
          ))}
        </div>
      </header>
    );
  }
);
HeaderLayout.propTypes = {
  itemsInCart: arrayOf(PropTypes.object).isRequired,
  userData: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  onLogOut: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
