import Card from "@/components/shared/Card";
import { useDeleteSingleFoundItemMutation } from "@/redux/api/foundItemAPi";
import { LostItem } from "@/types/lostItems";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";

const SingleCard = ({ item }: { item: LostItem }) => {
  const [deleteReport, { isLoading }] = useDeleteSingleFoundItemMutation();
  const handleDelete = async () => {
    await deleteReport(item.id);
  };
  return (
    <Card key={item.id} item={item}>
      <Stack direction={"column"} gap={1}>
        <Button LinkComponent={Link} href={`/found-item/${item.id}`}>
          See Details
        </Button>
        <Button disabled={isLoading} color="error" onClick={handleDelete}>
          Delete
        </Button>
      </Stack>
    </Card>
  );
};

export default SingleCard;
