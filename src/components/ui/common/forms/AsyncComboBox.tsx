import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { IAsyncComboBoxProps } from "@/types";

export default function AsyncComboBox({
  label,
  placeholder,
  isLoading,
  isOpen,
  data,
  onChange,
  ...props
}: IAsyncComboBoxProps) {
  return (
    <Autocomplete
      //   id="asynchronous-demo"
      //   sx={{ width: 300 }}
      open={isOpen}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      getOptionLabel={(option) => option.label}
      options={data}
      loading={isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
          placeholder={placeholder}
        />
      )}
      onChange={onChange}
      {...props}
    />
  );
}
