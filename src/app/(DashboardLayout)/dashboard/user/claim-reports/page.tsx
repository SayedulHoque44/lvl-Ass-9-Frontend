/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useGetALLClaimsItemsQuery } from "@/redux/api/claimApi";
import { getUserInfo } from "@/services/auth.services";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import SingleShowCard from "./components/SingleShowCard";

import { TClaim } from "@/types/claim";

const page = () => {
  const userInfo = getUserInfo();
  const { data, isLoading } = useGetALLClaimsItemsQuery({
    limit: 100,
    userId: userInfo?.id,
  });
  console.log(data);
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
      </Stack>
    </Box>
  );
};

export default page;
