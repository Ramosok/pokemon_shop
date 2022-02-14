import { Link } from "react-router-dom";

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

import { ROUTE_NAMES } from "../../../routes/routeNames";

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
    <div
      id={id}
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-around",
        height: "510px",
        padding: "10px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "center" }}>
        <Card sx={{ maxWidth: 600, margin: "0 5px" }}>
          <CardMedia component="img" height="300" image={image} alt={name} />
          <CardContent>
            <Typography
              style={{ textTransform: "capitalize" }}
              gutterBottom
              variant="h4"
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
        <div style={{ margin: "0 20px" }}>
          <h2 style={{ fontSize: "30px", margin: "0 20px" }}>Stats</h2>
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
      <div
        style={{
          position: "relative",
        }}
      >
        <h3 style={{ textAlign: "center", fontSize: " 30px" }}>Abilities</h3>
        {abilities &&
          abilities.map(({ title, description }) => (
            <AccordionDiteils
              key={title}
              title={title}
              description={description}
            />
          ))}
        {id > 1 && (
          <Link
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              display: "block",
              fontSize: "30px",
            }}
            to={`${ROUTE_NAMES.PRODUCTS}/${id - 1}/${name}`}
          >
            Prev
          </Link>
        )}
        <Link
          style={{
            position: "absolute",
            bottom: "0",
            right: "40%",
            display: "block",
            fontSize: "30px",
          }}
          to={ROUTE_NAMES.PRODUCTS}
        >
          Return to shop
        </Link>
        {id < 625 && (
          <Link
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              display: "block",
              fontSize: "30px",
            }}
            to={`${ROUTE_NAMES.PRODUCTS}/${id + 1}/${name}`}
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};
