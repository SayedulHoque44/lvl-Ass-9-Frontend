import Card from "@/components/shared/Card";
import { LostItem } from "@/types/lostItems";
import { Box, Button, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useDeleteSingleLostItemMutation,
  useUpdateLostReportMutation,
} from "@/redux/api/lostItemApi";
import { toast } from "sonner";
const SingleCard = ({ item }: { item: LostItem }) => {
  console.log(item);
  const [deleteReport, { isLoading }] = useDeleteSingleLostItemMutation();
  const [updateReport, { isLoading: isUpdateLoading }] =
    useUpdateLostReportMutation();

  const handleDelete = async () => {
    if (isLoading) {
      return;
    }
    const res = await deleteReport(item.id);
    console.log(res);
    if (res?.data?.id) {
      toast.success("Deleted Report Successfully!");
    } else {
      toast.error("Faild to update!");
    }
  };
  //
  const handleFound = async () => {
    const data = { founded: !item.founded };
    const res = await updateReport({ data, id: item?.id });
    // console.log(res);
    if (res?.data?.id) {
      toast.success("Report updated!");
    } else {
      toast.error("Faild to delete!");
    }
  };

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
        <Button
          onClick={handleFound}
          disabled={isLoading || isUpdateLoading}
          color={`${item.founded ? "error" : "success"}`}
        >
          {item.founded ? "Lost" : "Found"}
        </Button>
        <DeleteIcon
          color={`${isLoading || isUpdateLoading ? "disabled" : "error"}`}
          fontSize="large"
          onClick={handleDelete}
        />
      </Stack>
    </Card>
  );
};

export default SingleCard;
