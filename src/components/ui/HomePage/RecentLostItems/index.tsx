"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import { useGetAllLostItemsQuery } from "@/redux/api/lostItemApi";
import SingleCard from "./components/SingleCard";
import { LostItem } from "@/types/lostItems";
import Card from "@/components/shared/Card";
import Link from "next/link";
const RecentLostItemPosts = () => {
  const { data } = useGetAllLostItemsQuery({ limit: 5 });
  // console.log(data);
  return (
    <Container>
      <Box py={10}>
        <Typography variant="h4" textAlign={"center"} my={2}>
          Recent Lost Item Reports
        </Typography>

        <Grid container gap={4} justifyContent={"center"}>
          {data?.data?.map((item: LostItem) => (
            <Card key={item.id} item={item}>
              <Link href={`/lost-item/${item.id}`}>
                <Button>See Details</Button>
              </Link>
            </Card>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default RecentLostItemPosts;
