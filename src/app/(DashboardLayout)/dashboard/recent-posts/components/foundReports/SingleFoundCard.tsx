"use client";
import Card from "@/components/shared/Card";

import { Badge, BadgeProps, Button, Chip, Stack, styled } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

import { TFoundItem } from "@/types/foundItem";
import { usePathname } from "next/navigation";
import CreateClaim from "./CreateClaim";
import { getUserInfo } from "@/services/auth.services";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const SingleFoundCard = ({ item }: { item: TFoundItem }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const userInfo = getUserInfo();
  const isClaimedRequested = item?.Claim.find(
    (ele) => ele.userId === userInfo.id
  ); //TODO mistake

  return (
    <Card key={item.id} item={item}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link href={`/found-item/${item.id}`}>
          <Button>See Details</Button>
        </Link>
        {isClaimedRequested ? (
          <>
            {isClaimedRequested.status === "PENDING" && (
              <Chip label={"PENDING"} color="warning" />
            )}
            {isClaimedRequested.status === "APPROVED" && (
              <Chip label={"APPROVED"} color="success" />
            )}
            {isClaimedRequested.status === "REJECTED" && (
              <Chip label={"REJECTED"} color="error" />
            )}
          </>
        ) : (
          <>
            <Button onClick={() => setIsModalOpen(true)} color="success">
              Claim
            </Button>
            <CreateClaim
              open={isModalOpen}
              setOpen={setIsModalOpen}
              id={item.id}
            />
          </>
        )}
      </Stack>
    </Card>
  );
};

export default SingleFoundCard;
