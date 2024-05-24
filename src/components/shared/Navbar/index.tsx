import { Box, Container, GlobalStyles, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import Logo from "../Logo";

const Navbar = () => {
  const AuthButton = dynamic(() => import("@/components/ui/AuthButton/index"), {
    ssr: false,
  });

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Logo />
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          gap={4}
          alignItems={"center"}
        >
          <Typography component={Link} href="/">
            Home
          </Typography>
          <Typography component={Link} href="/about-us">
            About us
          </Typography>
        </Stack>
        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
