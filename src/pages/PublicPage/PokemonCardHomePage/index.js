import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";

import styles from "./../PublicPage.module.scss";

export const PokemonCardHomePage = ({ name, description, img }) => {
  return (
    <Card sx={{ margin: "5px" }}>
      <CardActionArea
        sx={{ display: "flex", flexDescription: "column", padding: "30px" }}
      >
        <CardMedia
          sx={{ maxWidth: "100%", padding: "6px" }}
          component="img"
          height="500"
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
