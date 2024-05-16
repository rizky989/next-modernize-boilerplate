"use client";
import { FormControl, Grid, Stack, TextField } from "@mui/material";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { AsyncComboBox, BaseButton, ComboBox } from "@/components";
import BaseSnackbar from "@/components/ui/common/alerts/Snackbar";

const baseDepartmentOptions = ["Operational", "IT", "Marketing", "Support"];

export default function ScanInPage() {
  const initialForm = {
    name: "",
    department: "",
  };
  const [formData, setFormData] = useState<any>(initialForm);
  const [isAsyncComboBoxLoading, setIsAsyncComboBoxLoading] =
    useState<boolean>(false);
  const [isAsyncComboBoxOpen, setIsAsyncComboBoxOpen] =
    useState<boolean>(false);
  const [asyncComboBoxData, setAsyncComboBoxData] = useState<
    { label: string }[]
  >([]);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const handleChange = (value: any, attribute: string) => {
    setFormData({ ...formData, [attribute]: value });
  };

  const departmentOptions = baseDepartmentOptions.map((item) => {
    return { label: item, value: item };
  });

  const onSearch = () => {
    setSnackbarMessage("Success");
    setIsSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  const loadOptions = () => {};

  const reloadAsyncOptions = (key: string, minLength: number) => {
    if (key.length >= minLength) {
      setIsAsyncComboBoxLoading(true);
      const delay = setTimeout(() => {
        const newOptions = departmentOptions.filter((x) =>
          x.value.toLocaleLowerCase().includes(key)
        );
        setAsyncComboBoxData(newOptions);
        setIsAsyncComboBoxLoading(false);
      }, 300);

      // Clear the timeout to avoid memory leaks
      return () => clearTimeout(delay);
    } else {
      setAsyncComboBoxData([]);
    }
  };

  return (
    <div className={styles.main}>
      <BaseSnackbar
        open={isSnackbarOpen}
        message={snackbarMessage}
        duration={3000}
        handleClose={closeSnackbar}
      />
      <Grid container spacing={2}>
        <Grid item lg={4} md={6} xs={8}>
          <FormControl fullWidth>
            <TextField
              label="Name"
              value={formData.phone}
              onChange={(e) => handleChange(e.target.value, "phone")}
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item lg={4} md={6} xs={8}>
          <ComboBox
            label="Department"
            data={departmentOptions}
            onChange={(event, selected) => {
              handleChange(selected?.value || "", "department");
            }}
          />
        </Grid>
        <Grid item lg={4} md={6} xs={8}>
          <AsyncComboBox
            label="Model"
            placeholder="Please Input Min 2 Char"
            isLoading={isAsyncComboBoxLoading}
            isOpen={isAsyncComboBoxOpen}
            data={asyncComboBoxData}
            onClickCapture={() => {
              setIsAsyncComboBoxOpen(true);
            }}
            onClose={() => {
              setIsAsyncComboBoxOpen(false);
            }}
            onChange={(event, selected) => {
              console.log({ selected });
            }}
            onInput={(e) => reloadAsyncOptions(e.target.value, 2)}
          />
        </Grid>
      </Grid>
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="end"
        my={2}
      >
        <BaseButton onClick={onSearch}>Search</BaseButton>
      </Stack>
    </div>
  );
}
