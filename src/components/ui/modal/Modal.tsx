import { IBaseModalProps } from "@/types";
import { Box, Modal } from "@mui/material";
import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BaseModal = ({
  open,
  handleClose,
  children,
  ...props
}: IBaseModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      {...props}
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default BaseModal;
