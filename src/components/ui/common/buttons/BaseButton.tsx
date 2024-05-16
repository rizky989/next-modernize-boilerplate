import React from "react";
import { Button } from "@mui/material";
import { IBaseButtonProps } from "@/types";

const style = {
  marginBottom: 8,
};

const BaseButton = ({
  children,
  ...props
}: IBaseButtonProps) => {
  return (
    <Button
      component="label"
      // role={"button"}
      variant={props.variant || "contained"}
      tabIndex={-1}
      size={props.size}
      startIcon={props.startIcon}
      style={style}
      {...props}
    >
      {children}
    </Button>
  );
};

// const BaseButton = ({
//   children,
//   ...props
// }: any) => {
//   return (
//     <Button
//       component="label"
//       // role={"button"}
//       variant={props.variant || "contained"}
//       tabIndex={-1}
//       size={props.size}
//       startIcon={props.startIcon}
//       style={style}
//       {...props}
//     >
//       {children}
//     </Button>
//   );
// };

export default BaseButton;
