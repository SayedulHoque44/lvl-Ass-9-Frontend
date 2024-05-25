import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={`https://i.ibb.co/p3GNQr9/Screenshot-27-removebg-preview.png`}
        width={200}
        height={150}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
