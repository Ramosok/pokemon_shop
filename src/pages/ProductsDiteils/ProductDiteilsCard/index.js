import { Link } from "react-router-dom";
import PropTypes, { arrayOf } from "prop-types";

import { Buttons } from "../../../commonComponents/Buttons";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Loader } from "../../../commonComponents/Loader";
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
  isLoading,
  isDisabled,
  handleAddCard,
  handleRemoveCard,
}) => {
  return isLoading || !id ? (
    <Loader />
  ) : (
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
        <Card sx={{ maxWidth: 600, width: 250, margin: "0 5px" }}>
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
          <Buttons
            isDisabled={isDisabled}
            id={id}
            name={name}
            image={image}
            price={price}
            handleAddCard={handleAddCard}
            handleRemoveCard={handleRemoveCard}
          />
        </Card>
        <div style={{ margin: "0 20px" }}>
          <h2 style={{ fontSize: "30px", margin: "0 35px" }}>Stats</h2>
          {stats?.map(({ title, value }) => (
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
        {abilities?.map(({ title, description }) => (
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
ProductDiteilsCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  abilities: arrayOf(PropTypes.object).isRequired,
  price: PropTypes.number.isRequired,
  stats: arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isDisabled: PropTypes.func.isRequired,
  handleAddCard: PropTypes.func.isRequired,
  handleRemoveCard: PropTypes.func.isRequired,
};
