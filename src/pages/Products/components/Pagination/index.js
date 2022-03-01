import { memo } from "react";
import PropTypes from "prop-types";

import { Pagination as MaterialPagination } from "@mui/material";

export const Pagination = memo(
  ({ currentPage, handlePageChange, pagesAmount, className }) => {
    return (
      <MaterialPagination
        className={className}
        page={currentPage}
        onChange={handlePageChange}
        count={pagesAmount}
      />
    );
  }
);
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  pagesAmount: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};
