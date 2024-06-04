import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <Container>
      <Stack justifyContent={"center"} py={20}>
        <Typography component={"h1"} variant="h2">
          Find what you lost, <br /> reunite what you found!
        </Typography>
        <Typography py={2} fontWeight={500}>
          Our Vision is to get your need back, So why late?
          <br />
          Start journy with us
        </Typography>
        <Stack direction={"row"} gap={2} alignItems={"center"}>
          <Button
            LinkComponent={Link}
            href="/dashboard/user/lost-reports/create"
          >
            Report A Lost Item
          </Button>
          <Button
            variant="outlined"
            LinkComponent={Link}
            href="/dashboard/user/found-reports/create"
          >
            Report A Found Item
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HeroSection;
