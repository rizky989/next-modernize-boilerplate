import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { IBaseIconButtonProps } from "@/types";

export default function BaseIconButton({
  children,
  ...props
}: IBaseIconButtonProps) {
  return (
    <IconButton aria-label={props.ariaLabel || "icon-button"} {...props}>
      {children}
    </IconButton>
  );
}
