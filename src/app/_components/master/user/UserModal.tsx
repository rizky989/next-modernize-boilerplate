import React, { FC, useState } from "react";
import { IMasterUserModalProps } from "@/types";
import { BaseButton, BaseModal } from "@/components";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const UserModal: FC<IMasterUserModalProps> = ({
  title,
  isOpen,
  handleClose,
  onSubmit,
}) => {
  const departmentOptions = ["Operational", "IT", "Marketing", "Support"];
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    department: "",
    age: null,
  };
  const [formData, setFormData] = useState<any>(initialForm);

  const selectDepartment = (event: any) => {
    setFormData({ ...formData, department: event.target.value });
  };

  const handleChange = (event: any, attribute: string) => {
    setFormData({ ...formData, [attribute]: event.target.value });
  };

  return (
    <BaseModal open={isOpen} handleClose={handleClose}>
      <Typography mb={2}>{title}</Typography>
      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          <TextField
            required
            label="Name"
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
            fullWidth
          />
          <TextField
            required
            label="Email"
            value={formData.email}
            onChange={(e) => handleChange(e, "email")}
            fullWidth
          />
          <TextField
            label="Phone number"
            value={formData.phone}
            onChange={(e) => handleChange(e, "phone")}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
              value={formData.department}
              label="Department"
              onChange={selectDepartment}
            >
              {departmentOptions.map((item) => {
                return <MenuItem value={item}>{item}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Stack>
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="end"
          my={2}
        >
          <BaseButton variant="outlined" onClick={handleClose}>
            Cancel
          </BaseButton>
          <BaseButton onClick={onSubmit}>Submit</BaseButton>
        </Stack>
      </form>
    </BaseModal>
  );
};

export default UserModal;
