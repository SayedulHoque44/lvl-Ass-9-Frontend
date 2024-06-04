"use client";
import { useGetSingleLostItemQuery } from "@/redux/api/lostItemApi";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import { useGetSingleFoundItemQuery } from "@/redux/api/foundItemAPi";

type TProps = {
  params: {
    id: string;
  };
};

const page = ({ params }: TProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useGetSingleFoundItemQuery(params.id);
  // console.log(data);
  return (
    <Container>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "center",
          "& img": {
            borderRadius: "10px",
            objectFit: "cover",
            mb: 4,
          },
        }}
      >
        {data?.image && (
          <Image src={data?.image} height={400} width={400} alt="img" />
        )}
      </Stack>
      <Typography>{data?.description}</Typography>
      <Stack direction={"row"} alignItems={"center"} gap={2} my={2}>
        <FlagCircleOutlinedIcon />
        <Typography>{data?.DateAndlocation}</Typography>
      </Stack>
    </Container>
  );
};

export default page;
