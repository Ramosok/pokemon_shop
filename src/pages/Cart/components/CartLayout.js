import PropTypes, { arrayOf } from "prop-types";

import { CardProductInCart } from "./CardProductInCart";
import Button from "@mui/material/Button";

import styles from "../cart.module.scss";

export const CartLayout = ({
  itemsInCart,
  totalPrice,
  customerId,
  handleRemoveCard,
  updatedItemQuantity,
  handleOrderSubmit,
}) => {
  return (
    <div className={styles.cart_container}>
      <h1>Cart</h1>
      <h2 style={{ textAlign: "center" }}>Total Price - {totalPrice}</h2>
      <div
        style={{ display: "flex", flexDescription: "row", flexWrap: "wrap" }}
      >
        {itemsInCart.map(({ id, name, image, price, quantity }) => (
          <CardProductInCart
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
            quantity={quantity}
            handleRemoveCard={handleRemoveCard}
            handleIncrement={updatedItemQuantity}
            handleDecrement={updatedItemQuantity}
          />
        ))}
      </div>
      <div className={styles.btn_cart}>
        <Button
          variant="contained"
          color="success"
          onClick={() =>
            handleOrderSubmit({ customerId, totalPrice, itemsInCart })
          }
        >
          Place an order
        </Button>
      </div>
    </div>
  );
};
CartLayout.propTypes = {
  itemsInCart: arrayOf(PropTypes.object).isRequired,
  totalPrice: PropTypes.number.isRequired,
  customerId: PropTypes.string.isRequired,
  handleRemoveCard: PropTypes.func.isRequired,
  updatedItemQuantity: PropTypes.func.isRequired,
};
