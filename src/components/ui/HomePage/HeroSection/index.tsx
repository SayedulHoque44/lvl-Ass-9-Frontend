import { Box, Button, Container, Stack, Typography } from "@mui/material";
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
          <Button>Report A Lost Item</Button>
          <Button variant="outlined">Report A Found Item</Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HeroSection;
