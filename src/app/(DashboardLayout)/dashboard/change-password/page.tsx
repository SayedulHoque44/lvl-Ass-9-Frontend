"use client";
import CustomForm from "@/components/Forms/CustomForm";
import CustomInput from "@/components/Forms/CustomInput";
import { useUserChangePasswordMutation } from "@/redux/api/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validationSchema = z
  .object({
    currentPassword: z.string().min(1, "Enter Current Password!"),
    newPassword: z.string().min(4, "minimum 4 character required!"),
    cpassword: z
      .string({ required_error: "Confirm password not matched" })
      .min(4, { message: "Please confirm your password" }),
  })
  .refine((data) => data.newPassword === data.cpassword, {
    path: ["cpassword"],
    message: "Passwords do not match",
  });

const page = () => {
  const [changePassword, { isLoading }] = useUserChangePasswordMutation();

  const handleSubmit = async ({ cpassword, ...values }: FieldValues) => {
    const res = await changePassword(values);
    // console.log(res);
    if (res?.data?.id) {
      toast.success("Password Changed Successfully!");
    } else {
      toast.error(res?.data?.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          minHeight: `100vh`,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Change Your Password
              </Typography>
            </Box>
          </Stack>

          <Box>
            <CustomForm
              onSubmit={handleSubmit}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                currentPassword: "",
                newPassword: "",
                cpassword: "",
              }}
              formReset
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <CustomInput
                    name="currentPassword"
                    label="Current Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={12}>
                  <CustomInput
                    name="newPassword"
                    label="New Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={12}>
                  <CustomInput
                    name="cpassword"
                    label="Confirm Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
                disabled={isLoading}
              >
                Change
              </Button>
            </CustomForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default page;
