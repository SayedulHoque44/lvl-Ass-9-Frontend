"use client";
import CustomForm from "@/components/Forms/CustomForm";
import CustomInput from "@/components/Forms/CustomInput";

import Logo from "@/components/shared/Logo";
import { userRegistration } from "@/services/actions/userRegistration";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validationSchema = z
  .object({
    name: z
      .string({ required_error: "Please enter a user name!" })
      .min(1, { message: "Please enter a user name!" }),
    email: z
      .string({ required_error: "Email is required!" })
      .email({ message: "Please enter a valid email address!" }),
    password: z
      .string({ required_error: "Password is required!" })
      .min(4, { message: "Must be at least 4 characters" }),
    cpassword: z
      .string({ required_error: "Confirm password not matched" })
      .min(4, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.cpassword, {
    path: ["cpassword"],
    message: "Passwords do not match",
  });

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async ({ cpassword, ...values }: FieldValues) => {
    // console.log(values);

    try {
      const res = await userRegistration(values);
      // console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/login");
      } else {
        setError(res.message);
        // console.log(res);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
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
            <Logo />

            <Box>
              <Typography variant="h6" fontWeight={600}>
                Create An Account / Register
              </Typography>
            </Box>
          </Stack>

          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}

          <Box>
            <CustomForm
              formReset
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                name: "",
                email: "",
                password: "",
                cpassword: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <CustomInput
                    name="name"
                    label="User name"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
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
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Already have an account?{" "}
                <Link href="/login">Login an account</Link>
              </Typography>
            </CustomForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
