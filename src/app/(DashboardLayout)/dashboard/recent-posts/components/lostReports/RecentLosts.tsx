"use client";

import { Box, Grid } from "@mui/material";
import React from "react";

import { TFoundItem } from "@/types/foundItem";
import SingleLostCard from "./SingleLostCard";
import { useGetAllLostItemsQuery } from "@/redux/api/lostItemApi";

const RecentLosts = ({ query }: { query: any }) => {
  const { data, isLoading } = useGetAllLostItemsQuery({
    limit: 100,
    ...query,
  });
  return (
    <Box>
      {/*  */}
      {isLoading && "Loading..."}
      {data?.data.length > 0 && (
        <Grid container gap={4} justifyContent={"center"} mt={3}>
          {data?.data?.map((item: TFoundItem) => (
            <SingleLostCard key={item?.id} item={item} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default RecentLosts;
