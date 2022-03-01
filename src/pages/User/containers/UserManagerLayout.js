import { useSelector } from "react-redux";

import { UserLayout } from "../components/UserLayout";

import { userSelectors } from "../selectors";

export const UserManagerLayout = () => {
  const { userData } = useSelector(userSelectors);
  return <UserLayout userData={userData} />;
};
