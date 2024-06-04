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
import { getUserInfo } from "@/services/auth.services";
import Logo from "@/components/shared/Logo";

const page = () => {
  const userInfo = getUserInfo();
  const { data } = useGetAllLostItemsQuery({
    limit: 100,
    userId: userInfo?.id,
  });
  return (
    <Container>
      <Box py={10}>
        <Typography variant="h4" textAlign={"center"} my={2}>
          Manage Your Lost Reports
        </Typography>
        <Link href={`${usePathname()}/create`}>
          <Button>
            Create Lost Report
            <AddIcon />
          </Button>
        </Link>
        <Grid container gap={4} justifyContent={"center"} mt={5}>
          {data?.data?.map((item: LostItem) => (
            <SingleCard key={item?.id} item={item} />
          ))}
        </Grid>
        {data?.data.length === 0 && (
          <Typography color={"red"}>
            No Lost Report Found! Create One!
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default page;
