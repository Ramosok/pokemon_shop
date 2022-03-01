import { useCallback, useState } from "react";

export const useShowAndHidePassword = () => {
  const [typePassword, setTypePassword] = useState("password");

  const handleShowPassword = useCallback(() => {
    setTypePassword("text");
  }, []);
  const handleHidePassword = useCallback(() => {
    setTypePassword("password");
  }, []);
  return {
    typePassword,
    handleShowPassword,
    handleHidePassword,
  };
};
