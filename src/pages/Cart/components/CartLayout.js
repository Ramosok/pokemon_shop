import styles from "../cart.module.scss";

export const CartLayout = ({ cart }) => {
  return (
    <div className={styles.cart_container}>
      <h1>Cart</h1>
    </div>
  );
};
