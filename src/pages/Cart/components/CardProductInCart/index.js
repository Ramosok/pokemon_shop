import { memo } from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../../../routes/routeNames";

import styles from "../../../Products/ProductsCard/productCard.module.scss";

export const CardProductInCart = memo(
  ({
    id,
    name,
    image,
    price,
    quantity,
    handleIncrement,
    handleDecrement,
    handleRemoveCard,
  }) => {
    return (
      <Card id={id} className={styles.card_container}>
        <Link id={styles.card_img} to={`${ROUTE_NAMES.PRODUCTS}/${id}/${name}`}>
          <CardMedia component="img" height="200" image={image} alt={name} />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link to={`${ROUTE_NAMES.PRODUCTS}/${id}/${name}`}>
              <span className={styles.formatted_name}>{name}</span>
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price - {price}$
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quantity - {quantity}
          </Typography>
        </CardContent>
        <Button size="small" onClick={() => handleRemoveCard(id)}>
          Remove Cart
        </Button>
        <div>
          <Button
            style={{ fontSize: "30px" }}
            size="small"
            onClick={() => handleIncrement({ id, quantity: quantity + 1 })}
          >
            +
          </Button>
          <Button
            style={{ fontSize: "30px" }}
            size="small"
            disabled={quantity < 2}
            onClick={() => handleDecrement({ id, quantity: quantity - 1 })}
          >
            -
          </Button>
        </div>
      </Card>
    );
  }
);
CardProductInCart.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleRemoveCard: PropTypes.func.isRequired,
};
