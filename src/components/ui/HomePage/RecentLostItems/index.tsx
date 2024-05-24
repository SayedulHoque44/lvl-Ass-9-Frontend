"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import { useGetAllLostItemsQuery } from "@/redux/api/lostItemApi";
import SingleCard from "./components/SingleCard";
import { LostItem } from "@/types/lostItems";
const RecentLostItemPosts = () => {
  const { data } = useGetAllLostItemsQuery({ limit: 5 });
  // console.log(data);
  return (
    <Container>
      <Box py={10}>
        <Typography variant="h4" textAlign={"center"} my={2}>
          Recent Lost Item Reports
        </Typography>

        <Grid container gap={4} justifyContent={"center"}>
          {data?.data?.map((item: LostItem) => (
            <SingleCard key={item.id} item={item} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default RecentLostItemPosts;
