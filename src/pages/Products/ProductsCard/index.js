import { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Buttons } from "../../../commonComponents/Buttons";
import { ROUTE_NAMES } from "../../../routes/routeNames";

import { CardMedia, CardContent, Typography, Card } from "@mui/material/";

import styles from "./productCard.module.scss";

export const ProductsCard = memo(
  ({ id, name, image, price, handleAddCard, handleRemoveCard, isDisabled }) => {
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
        </CardContent>
        <Buttons
          id={id}
          name={name}
          image={image}
          price={price}
          isDisabled={isDisabled}
          handleAddCard={handleAddCard}
          handleRemoveCard={handleRemoveCard}
        />
        <span className={styles.pop_up}>click to diteils</span>
      </Card>
    );
  }
);
ProductsCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleAddCard: PropTypes.func.isRequired,
  handleRemoveCard: PropTypes.func.isRequired,
  isDisabled: PropTypes.func.isRequired,
};
