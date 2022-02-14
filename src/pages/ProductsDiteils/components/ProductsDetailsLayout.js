import { ProductDiteilsCard } from "../ProductDiteilsCard";

export const ProductsDetailsLayout = ({
  info,
  disabled,
  handleAddCard,
  handleRemoveCard,
}) => {
  const { id, name, image, abilities, price, stats } = info;

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
