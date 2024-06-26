import { Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import { LostItem } from "@/types/lostItems";
import Link from "next/link";

const SingleCard = ({ item }: { item: LostItem }) => {
  // console.log(item);
  return (
    <Grid
      boxShadow={1}
      p={2}
      item
      md={3}
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
        height={200}
        width={200}
        alt="img"
      />
      <Typography>{item?.description}</Typography>
      <Stack direction={"row"} alignItems={"center"} gap={2} my={2}>
        <FlagCircleOutlinedIcon />
        <Typography>{item?.DateAndlocation}</Typography>
      </Stack>
      <Link href={`/lost-item/${item.id}`}>
        <Button>See Details</Button>
      </Link>
    </Grid>
  );
};

export default SingleCard;
