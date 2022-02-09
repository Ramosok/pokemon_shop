import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import { Loader } from "../../Loader";

import { Modal, Box } from "@mui/material";

import { ROUTE_NAMES } from "../../../routes/routeNames";

import { LoginForm } from "../../Login/component/LoginForm";

import styles from "../header.module.scss";

export const HeaderLayout = ({
  onLogOut,
  isAuth,
  isLoading,
  userData,
  open,
  handleOpen,
  handleClose,
}) => {
  const path = useLocation();

  useEffect(() => {
    handleClose();
  }, [isAuth, path.pathname]);

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
          <div className={styles.shoping_cart}></div>
        </div>
      </div>
      <div className={styles.navbar}>
        <Link className={styles.closing_button} to={ROUTE_NAMES.PRODUCTS}>
          <span>Pokemons Shop</span>
        </Link>
        <Link className={styles.closing_button} to={ROUTE_NAMES.HOME}>
          <span>Home</span>
        </Link>
        <a href="https://watch.pokemon.com/ru-ru/" target="_blank">
          Pokemon TV
        </a>
        <a
          href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BA%D0%B5%D0%BC%D0%BE%D0%BD"
          target="_blank"
        >
          Pokemon Wiki
        </a>
        <a href="https://gamer-info.com/game-series/pokemon/" target="_blank">
          Pokemon Game
        </a>
      </div>
    </header>
  );
};
