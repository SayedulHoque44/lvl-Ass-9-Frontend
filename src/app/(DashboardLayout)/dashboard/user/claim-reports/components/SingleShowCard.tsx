import { Chip, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";

import { TClaim } from "@/types/claim";
import { dateFormatter } from "@/utils/dateFormatter";
const SingleShowCard = ({ item }: { item: TClaim }) => {
  return (
    <Grid container boxShadow={1} p={2} border={1} spacing={1}>
      <Grid item sm={6}>
        <Typography variant="h6" fontWeight={600}>
          {item.foundItem.name}
        </Typography>
        <Typography>{item.distinguishingFeatures}</Typography>
        <Stack direction={"row"} alignItems={"center"} gap={2} my={2}>
          <AccessTimeFilledIcon />
          <Typography>{dateFormatter(item.lostDate)}</Typography>
        </Stack>

        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <FlagCircleOutlinedIcon />
          <Typography>{item.foundItem.DateAndlocation}</Typography>
        </Stack>
      </Grid>
      <Grid item sm={6} justifyContent={"end"}>
        {item.status === "PENDING" && (
          <Chip label={"PENDING"} color="warning" />
        )}
        {item.status === "APPROVED" && (
          <Chip label={"APPROVED"} color="success" />
        )}
        {item.status === "REJECTED" && (
          <Chip label={"REJECTED"} color="error" />
        )}
        <Typography mt={1}>{dateFormatter(item.createdAt)}</Typography>
      </Grid>
    </Grid>
  );
};

export default SingleShowCard;
