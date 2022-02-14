import { memo } from "react";
import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../../routes/routeNames";

import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
} from "@mui/material/";

import styles from "./productCard.module.scss";

export const ProductsCard = memo(
  ({ id, name, image, price, disabled, handleAddCard, handleRemoveCard }) => {
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
        <CardActions>
          <Button
            size="small"
            disabled={disabled}
            onClick={() => handleAddCard(id, name, image, price)}
          >
            Add Cart
          </Button>
          <Button size="small" onClick={() => handleRemoveCard(id)}>
            Remove Cart
          </Button>
        </CardActions>
        <span className={styles.pop_up}>click to diteils</span>
      </Card>
    );
  }
);
