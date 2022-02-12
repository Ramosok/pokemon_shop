import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import { changeDataTitle } from "../ConfigChangeData";
import { AccordionDiteils } from "./AccordionDiteils";

export const ProductDiteilsCard = ({
  id,
  name,
  image,
  abilities,
  price,
  stats,
  disabled,
  handleAddCard,
  handleRemoveCard,
}) => {
  return (
    <div id={id} style={{ backgroundColor: "white" }}>
      <div style={{ display: "flex", flexDirection: "center" }}>
        <Card sx={{ maxWidth: 600, margin: "0 5px" }}>
          <CardMedia component="img" height="180" image={image} alt={name} />
          <CardContent>
            <Typography
              style={{ textTransform: "capitalize" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${price}
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
        </Card>
        <div>
          <h2 style={{ fontSize: "30px" }}>Stats</h2>
          {stats &&
            stats.map(({ title, value }) => (
              <div
                key={title}
                style={{ fontSize: "20px", backgroundColor: "white" }}
              >
                <img
                  style={{ display: "Inline-block", width: "50px" }}
                  src={changeDataTitle[title]}
                  alt=""
                />
                <span style={{ display: "Inline-block", marginLeft: "30px" }}>
                  {value}
                </span>
              </div>
            ))}
        </div>
      </div>
      <h3 style={{ textAlign: "center", fontSize: " 30px" }}>Abilities</h3>
      {abilities &&
        abilities.map(({ title, description }) => (
          <AccordionDiteils
            key={title}
            title={title}
            description={description}
          />
        ))}
    </div>
  );
};
