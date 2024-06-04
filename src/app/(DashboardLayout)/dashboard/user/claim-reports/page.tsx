/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useGetALLClaimsItemsQuery } from "@/redux/api/claimApi";
import { getUserInfo } from "@/services/auth.services";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import SingleShowCard from "./components/SingleShowCard";

import { TClaim } from "@/types/claim";
import { DataGrid } from "@mui/x-data-grid";

const page = () => {
  const userInfo = getUserInfo();
  const { data, isLoading } = useGetALLClaimsItemsQuery({
    limit: 100,
    userId: userInfo?.id,
  });
  // console.log(data);

  return (
    <Box>
      <Typography variant="h5" my={2}>
        Claim Requested Reports
      </Typography>

      <Stack gap={3}>
        {isLoading
          ? "loading..."
          : data?.data?.map((item: TClaim) => (
              <SingleShowCard item={item} key={item.id} />
            ))}
        {data?.data.length === 0 && (
          <Typography color={"red"}>No Claim Report Found!</Typography>
        )}
      </Stack>
    </Box>
  );
};

export default page;
