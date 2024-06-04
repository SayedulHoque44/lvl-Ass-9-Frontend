"use client";
import {
  useGetALLUsersQuery,
  useUpdateUserStatusMutation,
} from "@/redux/api/userApi";
import { TUser } from "@/types/user";
import { dateFormatter } from "@/utils/dateFormatter";
import {
  Box,
  Chip,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const UserManagmentPage = () => {
  const { data, isLoading, isFetching } = useGetALLUsersQuery({});
  const [updateUserStatus, { isLoading: isUserStatusLoading }] =
    useUpdateUserStatusMutation();
  const [updateStatus, setUpdateStatus] = useState("");
  const [updatedClaims, setUpdatedClaims] = useState();
  //   console.log(data);
  const users = data?.data;
  const metaData = data?.meta;
  //   console.log(claimRequest);

  const handleUpdateStatus = async (event: SelectChangeEvent, id: string) => {
    setUpdateStatus(event.target.value);
    const data = { isActive: event.target.value };
    await updateUserStatus({ data, id });
  };

  useEffect(() => {
    const updateData = data?.data?.map((singleUser: TUser, index: number) => {
      return {
        sl: index + 1,
        id: singleUser.id,
        userName: singleUser.name,
        userEmail: singleUser.email,
        status: singleUser.isActive,
        registerDate: dateFormatter(singleUser?.createdAt),
      };
    });
    setUpdatedClaims(updateData);
  }, [data]);

  //   console.log(updateStatus);
  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL" },
    { field: "userName", headerName: "User Name", flex: 1 },
    { field: "userEmail", headerName: "User Email", flex: 1 },
    { field: "registerDate", headerName: "Register Date", flex: 1 },
    {
      field: "action",
      headerName: "User Status",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={row.status}
            onChange={(e) => handleUpdateStatus(e, row.id)}
            disabled={isUserStatusLoading}
          >
            <MenuItem value={"ACTIVE"}>
              <Chip label={"ACTIVE"} color="success" />
            </MenuItem>
            <MenuItem value={"DEACTIVE"}>
              <Chip label={"DEACTIVE"} color="error" />
            </MenuItem>
          </Select>
        );
      },
    },
  ];
  // console.log(users);

  return (
    <Box>
      <Typography variant="h6" my={2}>
        User Managment
      </Typography>

      {!isLoading && data?.data.length === 0 && (
        <Typography textAlign={"center"} color={"red"}>
          There are No Users
        </Typography>
      )}
      {!isLoading ? (
        <Box my={2}>
          <DataGrid
            rows={updatedClaims ?? []}
            columns={columns}
            rowHeight={100}
            loading={isUserStatusLoading || isFetching}
          />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default UserManagmentPage;
