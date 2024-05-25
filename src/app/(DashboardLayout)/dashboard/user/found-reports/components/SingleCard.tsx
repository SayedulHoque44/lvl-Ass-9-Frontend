import Card from "@/components/shared/Card";
import {
  useDeleteSingleFoundItemMutation,
  useUpdateFoundReportMutation,
} from "@/redux/api/foundItemAPi";
import { LostItem } from "@/types/lostItems";
import {
  Badge,
  BadgeProps,
  Button,
  IconButton,
  Stack,
  styled,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { TFoundItem } from "@/types/foundItem";
import { usePathname } from "next/navigation";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const SingleCard = ({ item }: { item: TFoundItem }) => {
  const [deleteReport, { isLoading }] = useDeleteSingleFoundItemMutation();
  console.log(item);
  // const [updateReport, { isLoading: isUpdateLoading }] =
  //   useUpdateFoundReportMutation();

  const handleDelete = async () => {
    if (isLoading) {
      return;
    }
    const res = await deleteReport(item.id);
    // console.log(res);
    if (res?.data?.id) {
      toast.success("Deleted Report Successfully!");
    } else {
      toast.error("Faild to update!");
    }
  };
  //
  // const handleFound = async () => {
  //   const data = { founded: !item.founded };
  //   const res = await updateReport({ data, id: item?.id });
  //   // console.log(res);
  //   if (res?.data?.id) {
  //     toast.success("Report updated!");
  //   } else {
  //     toast.error("Faild to delete!");
  //   }
  // };
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

        <IconButton
          aria-label="claim request"
          LinkComponent={Link}
          href={`${usePathname()}/claim-request/${item.id}`}
        >
          <StyledBadge badgeContent={item?.Claim?.length} color="primary">
            <NotificationsNoneIcon />
          </StyledBadge>
        </IconButton>

        <DeleteIcon
          color={`${isLoading ? "disabled" : "error"}`}
          fontSize="large"
          onClick={handleDelete}
          sx={{ cursor: "pointer" }}
        />
      </Stack>
    </Card>
  );
};

export default SingleCard;
