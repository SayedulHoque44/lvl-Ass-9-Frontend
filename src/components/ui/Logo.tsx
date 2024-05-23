import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Typography component={Link} href="/">
      <Image
        src={`https://i.ibb.co/dBSyMd8/Screenshot-26-removebg-preview.png`}
        width={150}
        height={100}
        alt="logo"
      />
    </Typography>
  );
};

export default Logo;
