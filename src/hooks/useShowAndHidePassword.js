import { useState } from "react";

export const useShowAndHidePassword = () => {
  const [typePassword, setTypePassword] = useState("password");

  const handleShowPassword = () => {
    setTypePassword("text");
  };
  const handleHidePassword = () => {
    setTypePassword("password");
  };
  return {
    typePassword,
    handleShowPassword,
    handleHidePassword,
  };
};
