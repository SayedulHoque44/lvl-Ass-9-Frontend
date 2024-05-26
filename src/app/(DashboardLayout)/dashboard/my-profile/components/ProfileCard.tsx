import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import KeyOffIcon from "@mui/icons-material/KeyOff";
import CustomForm from "@/components/Forms/CustomForm";
import { FieldValues } from "react-hook-form";
import CustomInput from "@/components/Forms/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { setegid } from "process";
import Link from "next/link";
import { useUpdateUserMutation } from "@/redux/api/userApi";
import { toast } from "sonner";

const validationSchema = z.object({
  name: z.string().min(1, "User Name cannot be empty"),
  email: z.string().email("Enter valid email"),
});

const ProfileCard = ({ item }: { item: TUser }) => {
  const [edit, setEdit] = useState(false);
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleEdit = async (values: FieldValues) => {
    const res = await updateUser(values);
    if (res?.data?.id) {
      setEdit(false);
      toast.success("User Updated Successfully!");
    } else {
      toast.success("Faild to update user!");
    }
  };
  return (
    <Stack direction={"column"}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Avatar sx={{ height: "100px", width: "100px" }} />
          <Box mt={2}>
            <Typography>Name: {item.name}</Typography>
            <Typography>Email: {item.email}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Stack mt={2} direction={"row"} gap={3}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={2}
              fontWeight={600}
              component={"div"}
              onClick={() => setEdit(!edit)}
              sx={{
                cursor: "pointer",
              }}
            >
              <BorderColorIcon />
              <Typography>Edit Profile</Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={2}
              fontWeight={600}
              sx={{
                cursor: "pointer",
              }}
              component={Link}
              href={"/dashboard/change-password"}
            >
              <KeyOffIcon />
              <Typography>Change Password</Typography>
            </Stack>
          </Stack>
          {/*  edit */}
          {edit && (
            <Box mt={3}>
              <CustomForm
                onSubmit={handleEdit}
                defaultValues={{ name: item.name, email: item.email }}
                resolver={zodResolver(validationSchema)}
              >
                <Stack direction={"row"} gap={2} mb={2}>
                  <CustomInput
                    name="name"
                    placeholder="Enter user name"
                    label="User Name"
                    type="text"
                  />
                  <CustomInput
                    name="email"
                    placeholder="Enter user email"
                    label="Email"
                    type="email"
                  />
                </Stack>
                <Button disabled={isLoading} type="submit">
                  Save Change
                </Button>
              </CustomForm>
            </Box>
          )}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ProfileCard;
