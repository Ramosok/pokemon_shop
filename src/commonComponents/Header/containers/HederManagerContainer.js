import { useState } from "react";
import { useSelector } from "react-redux";

import { authLoginSelector } from "../selectors";

import { HeaderLayout } from "../components/HeaderLayout";

export const HeaderManagerContainer = () => {
  const { isAuth, userData, isLoading } = useSelector(authLoginSelector);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <HeaderLayout
      open={open}
      isAuth={isAuth}
      isLoading={isLoading}
      userData={userData}
      onLogOut={onLogOut}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
};
