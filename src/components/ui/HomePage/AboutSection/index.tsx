import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <Container>
      <Grid container spacing={2} py={10}>
        <Grid item md={6}>
          <Typography variant="h5" color={"primary.main"} fontWeight={600}>
            About Us
          </Typography>
          <Typography variant="h3" component={"p"} fontWeight={500} py={4}>
            Our Dream is to <br /> Solution the problem
          </Typography>
          <Typography fontWeight={500} letterSpacing={2} lineHeight={2}>
            Welcome to Lost and Found Solution, your trusted platform for
            reuniting lost items with their rightful owners. Our mission is to
            create a secure and user-friendly space where individuals can both
            report lost items and post details of found items, facilitating the
            return of valuables to their proper owners.
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            "& img": {
              borderRadius: "10px",
              width: "100%",
              objectFit: "cover",
              mb: 4,
            },
          }}
        >
          <Image
            src={"https://i.ibb.co/f2cn20J/windows-WJPHTJEtgzw-unsplash.jpg"}
            width={500}
            height={500}
            alt="team"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;
