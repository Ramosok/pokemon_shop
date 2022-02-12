import { ProductDiteilsCard } from "../ProductDiteilsCard";
import { useCart } from "../../../hooks";

export const ProductsDetailsLayout = ({ info }) => {
  const { id, name, image, abilities, price, stats } = info;

  const { disabled, handleAddCard, handleRemoveCard } = useCart({
    id,
    name,
    image,
    price,
  });

  return (
    <ProductDiteilsCard
      disabled={disabled}
      id={id}
      name={name}
      image={image}
      abilities={abilities}
      price={price}
      stats={stats}
      handleAddCard={handleAddCard}
      handleRemoveCard={handleRemoveCard}
    />
  );
};
