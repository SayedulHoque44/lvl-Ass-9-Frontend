import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { TClaim } from "@/types/claim";
import { dateFormatter } from "@/utils/dateFormatter";
import InfoIcon from "@mui/icons-material/Info";

const SingleShowCard = ({ item }: { item: TClaim }) => {
  // console.log(item);
  return (
    <Box boxShadow={1} p={2} border={1}>
      <Typography variant="h6" fontWeight={600}>
        {item.foundItem.name.toUpperCase()}
      </Typography>
      <Grid container spacing={1}>
        <Grid item sm={6} display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="h6" fontWeight={600} color={"yellowgreen"}>
            Claimer
          </Typography>
          {/*  */}
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <PersonIcon />
            <Typography>
              {item.user.name},{item.user.email}
            </Typography>
          </Stack>
          {/*  */}
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <InfoIcon />
            <Typography>{item.distinguishingFeatures}</Typography>
          </Stack>
          {/*  */}
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <AccessTimeFilledIcon />
            <Typography>Lost Date : {dateFormatter(item.lostDate)}</Typography>
          </Stack>

          {/* <Stack direction={"row"} alignItems={"center"} gap={2}>
            <FlagCircleOutlinedIcon />
            <Typography>{item.}</Typography>
          </Stack> */}
        </Grid>
        <Grid item sm={6} display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="h6" fontWeight={600} color={"primary"} mb={1}>
            Founder
          </Typography>
          <Box>
            {item.status === "PENDING" && (
              <Chip label={"PENDING"} color="warning" />
            )}
            {item.status === "APPROVED" && (
              <Chip label={"APPROVED"} color="success" />
            )}
            {item.status === "REJECTED" && (
              <Chip label={"REJECTED"} color="error" />
            )}
          </Box>
          {/*  */}
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <PersonIcon />
            <Typography>
              {item.foundItem.user.name},{item.foundItem.user.email}
            </Typography>
          </Stack>
          {/*  */}
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <InfoIcon />
            <Typography>{item.foundItem.description}</Typography>
          </Stack>
          {/*  */}
          {/* <Stack direction={"row"} alignItems={"center"} gap={2}>
            <AccessTimeFilledIcon />
            <Typography>
              Lost Date : {dateFormatter(item.foundItem?.DateAndlocation)}
            </Typography>
          </Stack> */}

          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <FlagCircleOutlinedIcon />
            <Typography>{item.foundItem?.DateAndlocation}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleShowCard;
