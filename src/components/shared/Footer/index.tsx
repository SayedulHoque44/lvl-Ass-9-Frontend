import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      py={10}
      sx={{
        background:
          " linear-gradient(270deg, rgba(66,16,125,1) 0%, rgba(137,61,237,1) 71%);",
        color: "white",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <Logo />
            <Stack direction="column" gap={2}>
              <Typography sx={{ color: "white" }} component={Link} href="/">
                Home
              </Typography>
              <Typography
                sx={{ color: "white" }}
                component={Link}
                href="#about-us"
              >
                About us
              </Typography>
            </Stack>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="h5">Contact Us:</Typography>
            <Typography sx={{ color: "white", my: 2 }}>
              sayedulhoque3544@gmail.com
              <br />
              +8801864484844
            </Typography>
            <Typography>Privary & Policy</Typography>
          </Grid>
        </Grid>
        <Stack alignItems={"center"}>
          <Typography>
            {" "}
            Copy Write &#169; All Rights Reserved Sayedulhoque
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
