import { memo } from "react";
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
