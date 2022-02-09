import { ProductsCard } from "../ProductsCard";
import { Loader } from "../../../commonComponents/Loader";
import { Pagination } from "./Pagination";

import styles from "./../productPage.module.scss";

export const ProductsLayout = ({ pokemonsList, page, handlePageChange }) => {
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
