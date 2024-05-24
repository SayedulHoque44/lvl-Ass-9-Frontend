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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            repudiandae nulla sed, aliquam iste ullam voluptatum assumenda
            magnam voluptatibus similique quis ex adipisci, quam excepturi!
            Quisquam repellat recusandae fugit alias?
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
