import PropTypes, { arrayOf } from "prop-types";

import styles from "../../header.module.scss";

export const Cart = ({ itemsInCart }) => {
  return (
    <div className={styles.shoping_cart}>
      {itemsInCart.length > 0 && (
        <div className={styles.shoping_cart_length}>{itemsInCart.length}</div>
      )}
    </div>
  );
};
Cart.propTypes = {
  itemsInCart: arrayOf(PropTypes.object).isRequired,
};
