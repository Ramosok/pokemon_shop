import { ProductDiteilsCard } from "../ProductDiteilsCard";

export const ProductsDetailsLayout = ({
  info,
  isDisabled,
  isLoading,
  handleAddCard,
  handleRemoveCard,
}) => {
  const { id, name, image, abilities, price, stats } = info;

  return (
    <ProductDiteilsCard
      id={id}
      name={name}
      image={image}
      abilities={abilities}
      price={price}
      stats={stats}
      isLoading={isLoading}
      isDisabled={isDisabled}
      handleAddCard={handleAddCard}
      handleRemoveCard={handleRemoveCard}
    />
  );
};
