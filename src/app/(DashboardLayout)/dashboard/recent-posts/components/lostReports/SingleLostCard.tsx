"use client";
import Card from "@/components/shared/Card";

import { Badge, BadgeProps, Button, Chip, Stack, styled } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

import { TFoundItem } from "@/types/foundItem";
import { usePathname } from "next/navigation";
import { getUserInfo } from "@/services/auth.services";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const SingleLostCard = ({ item }: { item: TFoundItem }) => {
  return (
    <Card key={item.id} item={item}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link href={`/lost-item/${item.id}`}>
          <Button>See Details</Button>
        </Link>
      </Stack>
    </Card>
  );
};

export default SingleLostCard;
