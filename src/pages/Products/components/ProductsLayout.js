import PropTypes, { arrayOf } from "prop-types";

import { ProductsCard } from "../ProductsCard";
import { Loader } from "../../../commonComponents/Loader";
import { Pagination } from "./Pagination";

import styles from "./../productPage.module.scss";

export const ProductsLayout = ({
  pokemonsList,
  page,
  isDisabled,
  handlePageChange,
  handleAddCard,
  handleRemoveCard,
}) => {
  return (
    <div>
      <Pagination
        className={styles.pagination}
        currentPage={+page}
        handlePageChange={handlePageChange}
        pagesAmount={25}
      />
      <div className={styles.product_container}>
        {pokemonsList ? (
          pokemonsList.map(({ id, name, image, price }) => (
            <ProductsCard
              key={id}
              id={id}
              name={name}
              image={image}
              price={price}
              handleAddCard={handleAddCard}
              handleRemoveCard={handleRemoveCard}
              isDisabled={isDisabled}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <Pagination
        className={styles.pagination}
        currentPage={+page}
        handlePageChange={handlePageChange}
        pagesAmount={25}
      />
    </div>
  );
};
ProductsLayout.propTypes = {
  pokemonsList: arrayOf(PropTypes.object).isRequired,
  page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isDisabled: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handleAddCard: PropTypes.func.isRequired,
  handleRemoveCard: PropTypes.func.isRequired,
};
