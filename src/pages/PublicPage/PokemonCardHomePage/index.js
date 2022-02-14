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
    <Card
      sx={{ margin: "5px" }}
      //className={container}
    >
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
