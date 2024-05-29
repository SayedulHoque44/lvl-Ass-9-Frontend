"use client";
import { useGetALLFoundItemsQuery } from "@/redux/api/foundItemAPi";
import { Box, Grid } from "@mui/material";
import React from "react";
import SingleFoundCard from "./SingleFoundCard";
import { TFoundItem } from "@/types/foundItem";

const RecentFounds = ({ query }: { query: any }) => {
  const { data, isLoading } = useGetALLFoundItemsQuery({
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
            <SingleFoundCard key={item?.id} item={item} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default RecentFounds;
