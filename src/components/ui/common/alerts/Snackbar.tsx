import * as React from "react";
import { IBaseSnackbarProps } from "@/types";
import { Alert, Snackbar } from "@mui/material";

export default function BaseSnackbar({
  open,
  duration,
  type,
  message,
  handleClose,
  ...props
}: IBaseSnackbarProps) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={duration || 6000}
      onClose={handleClose}
      {...props}
    >
      <Alert
        onClose={handleClose}
        severity={type || "success"}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
