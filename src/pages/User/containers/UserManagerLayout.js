import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { UserLayout } from "../components/UserLayout";

import { orderSelectors, userSelectors } from "../selectors";

import { GET_ORDER_REQUEST } from "../actions";

export const UserManagerLayout = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(userSelectors);
  const { orderItemsList } = useSelector(orderSelectors);

  useEffect(() => {
    dispatch(GET_ORDER_REQUEST());
  }, [dispatch]);

  return <UserLayout userData={userData} orderItemsList={orderItemsList} />;
};
