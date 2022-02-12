import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GET_POKEMON_REQUEST } from "../pages/Products/actions";

export const usePagination = () => {
  const dispatch = useDispatch();
  const initialPage = localStorage.getItem("page");

  const [page, setPage] = useState(initialPage || 1);

  const handlePageChange = useCallback((_, page) => {
    setPage(page);
  }, []);

  useEffect(() => {
    dispatch(GET_POKEMON_REQUEST(page));
    return () => {
      localStorage.setItem("page", page);
    };
  }, [dispatch, page]);
  return {
    page,
    handlePageChange,
  };
};
