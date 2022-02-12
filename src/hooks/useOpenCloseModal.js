import { useCallback, useState } from "react";

export const useOpenCloseModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  const onLogOut = useCallback(() => {
    localStorage.clear();
    window.location.reload();
  }, []);
  return {
    open,
    handleOpen,
    handleClose,
    onLogOut,
  };
};
