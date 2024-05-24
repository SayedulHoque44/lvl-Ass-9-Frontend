"use client";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Avatar, Box, Button, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  // console.log(userInfo);
  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };
  return (
    <Stack
      ml={2}
      alignItems={"center"}
      justifyItems={"center"}
      direction={"row"}
      gap={2}
    >
      {userInfo?.id ? (
        <>
          <Button color="error" onClick={handleLogOut}>
            Logout
          </Button>
          <Avatar></Avatar>
        </>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </Stack>
  );
};

export default AuthButton;
