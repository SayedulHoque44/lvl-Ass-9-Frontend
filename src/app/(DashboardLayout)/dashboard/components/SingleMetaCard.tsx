"use client";
import { AdminMeta } from "@/types";
import {
  Box,
  Grid,
  Stack,
  SvgIconTypeMap,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { ReactNode } from "react";
import { TMetaDataProps } from "./admin";

const colorList = [
  "#ab47bc",
  "#ec407a",
  "#ef5350",
  "#2196f3",
  "#26a69a",
  "#76ff03",
  "#ffb74d",
];

const SingleMetaCard = ({ item }: { item: TMetaDataProps }) => {
  const theme = useTheme();
  const selectedColor = colorList[Math.floor(Math.random() * colorList.length)];
  return (
    <Grid
      xs={12}
      md={4}
      lg={3}
      xl={2}
      boxShadow={`0px 5px 15px ${alpha(selectedColor, 0.5)}`}
      p={4}
      border={2}
      borderColor={selectedColor}
      bgcolor={alpha(selectedColor, 0.2)}
      borderRadius={2}
      item
    >
      <Stack
        fontWeight={600}
        direction={"column"}
        alignItems={"center"}
        width={"100%"}
      >
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <item.icon sx={{ fontSize: 30, fontWeight: 800 }} />
          <Typography variant="h6" sx={{ fontSize: 30, fontWeight: 800 }}>
            {item.amount}
          </Typography>
        </Stack>
        <Typography variant="h6" textAlign={"center"}>
          {item?.title}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default SingleMetaCard;
