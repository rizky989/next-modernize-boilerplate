"use client";
import { BaseButton, BaseIconButton, MainCard } from "@/components";
import styles from "./page.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Stack,
  TablePagination,
} from "@mui/material";
import UserModal from "@/app/_components/master/user/UserModal";
import { useState } from "react";
import BaseSnackbar from "@/components/ui/common/alerts/Snackbar";

const products = [
  {
    id: "1",
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "Low",
    pbg: "primary.main",
    budget: "3.9",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "Medium",
    pbg: "secondary.main",
    budget: "24.5",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "High",
    pbg: "error.main",
    budget: "12.8",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    priority: "Critical",
    pbg: "success.main",
    budget: "2.4",
  },
  {
    id: "5",
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "Low",
    pbg: "primary.main",
    budget: "3.9",
  },
  {
    id: "6",
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "Medium",
    pbg: "secondary.main",
    budget: "24.5",
  },
  {
    id: "7",
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "High",
    pbg: "error.main",
    budget: "12.8",
  },
  {
    id: "8",
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    priority: "Critical",
    pbg: "success.main",
    budget: "2.4",
  },
];

export default function MasterUserPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [users, setUsers] = useState<any>(products);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const addUser = () => {
    setModalTitle("Add User");
    setIsModalOpen(true);
  };

  const editUser = () => {
    setModalTitle("Edit User");
    setIsModalOpen(true);
  };

  const submitForm = () => {
    setIsModalOpen(false);
    setSnackbarMessage("Success");
    setIsSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Calculate the rows for the current page
  const currentRows = users.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  console.log({ currentRows });

  return (
    <div className={styles.main}>
      <BaseSnackbar
        open={isSnackbarOpen}
        message={snackbarMessage}
        duration={3000}
        handleClose={closeSnackbar}
      />
      {isModalOpen && (
        <UserModal
          title={modalTitle}
          isOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          onSubmit={submitForm}
        />
      )}
      <BaseButton onClick={addUser}>Add User</BaseButton>
      <MainCard title="Users Data">
        <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
          <Table
            aria-label="simple table"
            sx={{
              whiteSpace: "nowrap",
              mt: 2,
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Id
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Assigned
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Priority
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight={600}>
                    Budget
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="subtitle2" fontWeight={600}>
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentRows.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {item.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {item.name}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          sx={{
                            fontSize: "13px",
                          }}
                        >
                          {item.post}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      fontWeight={400}
                    >
                      {item.pname}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      sx={{
                        px: "4px",
                        backgroundColor: item.pbg,
                        color: "#fff",
                      }}
                      size="small"
                      label={item.priority}
                    ></Chip>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">${item.budget}k</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Stack
                      spacing={1}
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <BaseIconButton onClick={editUser}>
                        <ModeEditOutlinedIcon />
                      </BaseIconButton>
                      <BaseIconButton>
                        <DeleteIcon />
                      </BaseIconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </MainCard>
    </div>
  );
}
