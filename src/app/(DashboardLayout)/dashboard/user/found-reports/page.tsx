/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Card from "@/components/shared/Card";
import { useGetAllLostItemsQuery } from "@/redux/api/lostItemApi";
import { LostItem } from "@/types/lostItems";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { usePathname } from "next/navigation";
import SingleCard from "./components/SingleCard";
import { useGetALLFoundItemsQuery } from "@/redux/api/foundItemAPi";
import { TFoundItem } from "@/types/foundItem";
import { getUserInfo } from "@/services/auth.services";
const page = () => {
  const userInfo = getUserInfo();
  const { data } = useGetALLFoundItemsQuery({
    limit: 100,
    userId: userInfo?.id,
  });

  // console.log(data);
  return (
    <Container>
      <Box py={10}>
        <Typography variant="h4" textAlign={"center"} my={2}>
          Manage Your Found Reports
        </Typography>

        <Link href={`${usePathname()}/create`}>
          <Button>
            Create Found Report
            <AddIcon />
          </Button>
        </Link>

        <Grid container gap={4} justifyContent={"center"} mt={5}>
          {data?.data?.map((item: TFoundItem) => (
            <SingleCard key={item?.id} item={item} />
          ))}
        </Grid>
        {data?.data.length === 0 && (
          <Typography color={"red"}>
            No Found Report Found! Create One!
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default page;
