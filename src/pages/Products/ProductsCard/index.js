import { memo } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../../hooks";

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

export const ProductsCard = memo(({ id, name, image, price }) => {
  const { disabled, handleAddCard, handleRemoveCard } = useCart({
    id,
    name,
    image,
    price,
  });

  return (
    <Card id={id} className={styles.card_container}>
      <CardMedia
        id={styles.card_img}
        component="img"
        height="200"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <span className={styles.formatted_name}>{name}</span>
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
        <Link to={`${ROUTE_NAMES.PRODUCTS}/${id}/${name}`}>Details</Link>
      </CardActions>
    </Card>
  );
});
