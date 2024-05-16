import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { IComboBoxProps } from "@/types";

export default function ComboBox({
  data,
  label,
  onChange,
  ...props
}: IComboBoxProps) {
  return (
    <Autocomplete
      disablePortal
      options={data}
      renderInput={(params) => <TextField {...params} label={label} />}
      onChange={onChange}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      {...props}
    />
  );
}
