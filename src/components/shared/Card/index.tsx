import { LostItem } from "@/types/lostItems";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import { ReactNode } from "react";
import Link from "next/link";

const Card = ({ item, children }: { item: any; children?: ReactNode }) => {
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
      {item?.image ? (
        <Image src={item?.image} height={400} width={400} alt="img" />
      ) : (
        <Image
          src={`https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=`}
          height={400}
          width={400}
          alt="img"
        />
      )}
      <Typography fontWeight={600}>{item?.name}</Typography>
      <Typography>{item?.description}</Typography>
      <Stack direction={"row"} alignItems={"center"} gap={2} my={2}>
        <FlagCircleOutlinedIcon />
        <Typography>{item?.DateAndlocation}</Typography>
      </Stack>

      <Stack direction={"column"} justifyContent={"end"}>
        {children && children}
      </Stack>
    </Grid>
  );
};

export default Card;
