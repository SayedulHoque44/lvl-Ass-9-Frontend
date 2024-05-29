import CustomDatePicker from "@/components/Forms/CustomDatePicker";
import CustomForm from "@/components/Forms/CustomForm";
import CustomInput from "@/components/Forms/CustomInput";
import CustomModal from "@/components/shared/Modal/CustomModal";
import { useCreateClaimMutation } from "@/redux/api/claimApi";
import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { dateFormatter } from "@/utils/dateFormatter";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

// foundItemId
// distinguishingFeatures
// lostDate
const validationSchema = z.object({
  distinguishingFeatures: z
    .string()
    .min(1, "Enter some Distinguishing Features to prover your ownership!"),
  lostDate: z.any(),
});
const CreateClaim = ({ open, setOpen, id: foundItemId }: TProps) => {
  const [createClaim, { isLoading }] = useCreateClaimMutation();

  const handleCreate = async (values: FieldValues) => {
    values.lostDate = dayjs(values.lostDate).toISOString();
    values.foundItemId = foundItemId;

    try {
      const res = await createClaim(values);
      if (res?.data?.id) {
        toast.success("Claim Request Created!");
        setOpen(false);
      } else {
        toast.success("Faild to create request!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomModal open={open} setOpen={setOpen} title="Create Schedule">
      <CustomForm
        onSubmit={handleCreate}
        defaultValues={{ distinguishingFeatures: "" }}
        resolver={zodResolver(validationSchema)}
      >
        <Grid container spacing={2} my={1}>
          <Grid item md={6}>
            <CustomInput
              name="distinguishingFeatures"
              label="Distinguishing Features"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item md={6}>
            <CustomDatePicker name="lostDate" label="Lost Date" />
          </Grid>
        </Grid>
        <Button type="submit" disabled={isLoading}>
          Create Request
        </Button>
      </CustomForm>
    </CustomModal>
  );
};

export default CreateClaim;
