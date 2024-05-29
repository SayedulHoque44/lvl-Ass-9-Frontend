"use client";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo } from "@/services/auth.services";
import { Box } from "@mui/material";

import React from "react";
import AdminPage from "../admin/page";
import AdminMeta from "./admin";
import UserMeta from "./user";

const Dashborad = () => {
  const userinfo = getUserInfo();
  return (
    <Box
      sx={{
        p: {
          xs: 1, // mobile
          sm: 6, // tablet
          md: 10, // desktop
        },
      }}
    >
      {userinfo?.role === USER_ROLE.ADMIN && <AdminMeta />}
      {userinfo?.role === USER_ROLE.USER && <UserMeta />}
    </Box>
  );
};

export default Dashborad;
