/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import CustomForm from "@/components/Forms/CustomForm";
import CustomInput from "@/components/Forms/CustomInput";
import CustomSelectField from "@/components/Forms/CustomSelectField";
import { useCreateLostReportMutation } from "@/redux/api/lostItemApi";

import { userLogin } from "@/services/actions/userLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const categories = [
  "Electronics",
  "Clothing",
  "Accessories",
  "Documents & IDs",
  "Keys",
  "Personal Items",
  "Health & Personal Care",
  "Sports Equipment",
  "Home & Garden",
  "Pets",
  "Toys",
  "Tools",
  "Miscellaneous",
];

const validationSchema = z.object({
  name: z
    .string({ required_error: "Please enter a report name!" })
    .min(1, { message: "Please enter a report name!" }),
  category: z
    .string({ required_error: "Please select a category!" })
    .min(1, { message: "Please select a category!" }),
  description: z
    .string({ required_error: "Please enter a description!" })
    .min(1, { message: "Please enter a description!" }),
  DateAndlocation: z.string().optional(),
  phone: z.string().optional(),
  image: z.string().optional(),
});

const page = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [createReport] = useCreateLostReportMutation();

  const handleCreate = async (values: FieldValues) => {
    // console.log(values);

    try {
      const res = await createReport(values);
      // console.log(res);
      if (res?.data.success) {
        // toast.success(res?.message);
        // router.push("/");
      } else {
        setError(res.data.message);
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
                Create Found Report
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
              onSubmit={handleCreate}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                name: "oneplus 7T",
                category: "Electronics",
                description: "desc",
                DateAndlocation: "12/03/24",
                phone: "",
                image: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <CustomInput
                    name="name"
                    label="Report Name"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomSelectField
                    items={categories}
                    name="category"
                    label="Item Category"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    name="description"
                    label="Description"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    name="DateAndlocation"
                    label="DateAndlocation"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    name="phone"
                    label="phone"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomInput
                    name="image"
                    label="image"
                    type="text"
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
                Create
              </Button>
            </CustomForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default page;
