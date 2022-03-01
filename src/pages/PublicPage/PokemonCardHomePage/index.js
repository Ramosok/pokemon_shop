import PropTypes from "prop-types";

import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";

export const PokemonCardHomePage = ({
  name,
  description,
  img,
  className,
  container,
}) => {
  return (
    <Card sx={{ margin: "5px" }}>
      <CardActionArea
        className={container}
        sx={{ display: "flex", flexDescription: "column", padding: "30px" }}
      >
        <CardMedia
          className={className}
          sx={{ maxWidth: "100%", padding: "6px" }}
          component="img"
          image={img}
          alt=""
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
PokemonCardHomePage.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  container: PropTypes.string.isRequired,
};
