import { memo } from "react";

import { CardActions, Button } from "@mui/material";

export const Buttons = memo(
  ({ id, name, image, price, isDisabled, handleAddCard, handleRemoveCard }) => {
    return (
      <CardActions style={{ cursor: "not-allowed" }}>
        <Button
          size="small"
          disabled={isDisabled(id)}
          onClick={() => handleAddCard({ id, name, image, price })}
        >
          Add Cart
        </Button>
        <Button size="small" onClick={() => handleRemoveCard(id)}>
          Remove Cart
        </Button>
      </CardActions>
    );
  }
);
