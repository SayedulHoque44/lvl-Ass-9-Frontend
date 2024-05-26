"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box, Typography } from "@mui/material";
import ProfileCard from "./components/ProfileCard";

const page = () => {
  const { data, isLoading } = useGetMyProfileQuery({});
  // console.log(data);
  return (
    <Box boxShadow={1} p={2} border={1}>
      <Typography variant="h6" fontWeight={600} mb={2}>
        My Profile
      </Typography>
      {isLoading ? "Loading..." : data.id && <ProfileCard item={data} />}
    </Box>
  );
};

export default page;
