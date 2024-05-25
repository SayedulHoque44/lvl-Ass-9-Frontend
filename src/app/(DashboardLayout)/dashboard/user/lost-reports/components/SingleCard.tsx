import Card from "@/components/shared/Card";
import { LostItem } from "@/types/lostItems";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const SingleCard = ({ item }: { item: LostItem }) => {
  return (
    <Card key={item.id} item={item}>
      <>
        <Link href={`/lost-item/${item.id}`}>
          <Button>See Details</Button>
        </Link>
      </>
    </Card>
  );
};

export default SingleCard;
