/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Card from "@/components/shared/Card";
import { useGetAllLostItemsQuery } from "@/redux/api/lostItemApi";
import { LostItem } from "@/types/lostItems";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import SingleCard from "./components/SingleCard";
import AddIcon from "@mui/icons-material/Add";
import { usePathname } from "next/navigation";
const page = () => {
  const { data } = useGetAllLostItemsQuery({ limit: 100 });

  // console.log(data);
  return (
    <Container>
      <Box py={10}>
        <Typography variant="h4" textAlign={"center"} my={2}>
          Manage Your Lost Reports
        </Typography>

        <Button LinkComponent={Link} href={`${usePathname()}/create`}>
          Create Lost Report
          <AddIcon />
        </Button>

        <Grid container gap={4} justifyContent={"center"} mt={5}>
          {data?.data?.map((item: LostItem) => (
            <SingleCard key={item?.id} item={item} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default page;
