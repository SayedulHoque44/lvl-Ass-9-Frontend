/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import dayjs from "dayjs";
import { useGetSingleFoundItemQuery } from "@/redux/api/foundItemAPi";
import {
  Box,
  Chip,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import { Claim, TFoundItem } from "@/types/foundItem";
import { dateFormatter } from "@/utils/dateFormatter";
import { useUpdateClaimReportMutation } from "@/redux/api/claimApi";

const page = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = useGetSingleFoundItemQuery(params.id);
  const [updateClaimReport, { isLoading: isClaimLoading }] =
    useUpdateClaimReportMutation();
  const [updateStatus, setUpdateStatus] = useState("");
  const [updatedClaims, setUpdatedClaims] = useState();
  //   console.log(data);
  const claimUser = data?.user;
  const claimRequest = data?.Claim;
  //   console.log(claimRequest);

  const handleUpdateStatus = async (event: SelectChangeEvent, id: string) => {
    setUpdateStatus(event.target.value);
    const data = { status: event.target.value };
    await updateClaimReport({ data, id });
  };

  useEffect(() => {
    const updateData = claimRequest?.map(
      (singleClaim: Claim, index: number) => {
        return {
          sl: index + 1,
          id: singleClaim.id,
          userName: claimUser.name,
          itemName: data.name,
          status: singleClaim.status,
          dec: singleClaim.distinguishingFeatures,
          lostDate: dateFormatter(singleClaim?.lostDate),
        };
      }
    );
    setUpdatedClaims(updateData);
  }, [data]);

  //   console.log(updateStatus);
  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL" },
    { field: "userName", headerName: "User Name", flex: 1 },
    { field: "itemName", headerName: "Item Name", flex: 1 },
    { field: "dec", headerName: "Distinguishing Features", flex: 2 },
    { field: "lostDate", headerName: "Lost Date", flex: 1 },
    {
      field: "action",
      headerName: "Action",
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
            disabled={isClaimLoading}
          >
            {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
            <MenuItem value={"PENDING"}>
              <Chip label={"PENDING"} color="warning" />
            </MenuItem>
            <MenuItem value={"APPROVED"}>
              <Chip label={"APPROVED"} color="success" />
            </MenuItem>
            <MenuItem value={"REJECTED"}>
              <Chip label={"REJECTED"} color="error" />
            </MenuItem>
          </Select>
        );
      },
    },
  ];
  return (
    <Box>
      <Typography variant="h6" my={2}>
        Claim Request By The User
      </Typography>

      {!isLoading && data?.Claim.length === 0 && (
        <Typography textAlign={"center"} color={"red"}>
          There are No Claim Request
        </Typography>
      )}
      {!isLoading ? (
        <Box my={2}>
          <DataGrid
            rows={updatedClaims ?? []}
            columns={columns}
            rowHeight={100}
          />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default page;
