"use client";
import { Box, Grid, SvgIconTypeMap } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleMetaCard from "../SingleMetaCard";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useGetUserMetaQuery } from "@/redux/api/userApi";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TMetaDataProps = {
  title: string;
  amount: number;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
};

const generateRowItems = ([key, value]: any) => {
  switch (key) {
    case "totalUser":
      return {
        title: "Total User",
        amount: value,
        icon: PeopleIcon,
      };

    case "totolFoundItems":
      return {
        title: "Total Found Items",
        amount: value,
        icon: ArticleIcon,
      };

    case "totolClaimRequest":
      return {
        title: "Totol Claim Request",
        amount: value,
        icon: ArticleIcon,
      };

    case "totolClaimedReport":
      return {
        title: "Totol Claimed Report",
        amount: value,
        icon: ArticleIcon,
      };

    case "totolLostItems":
      return {
        title: "totol Lost Items",
        amount: value,
        icon: ArticleIcon,
      };

    default:
      break;
  }
};

const AdminMeta = () => {
  const { data, isLoading } = useGetUserMetaQuery({});
  const [metaData, setMetaData] = useState<TMetaDataProps[]>([]);

  useEffect(() => {
    if (data) {
      const updateData: any = [];
      for (const ele of Object.entries(data)) {
        updateData.push(generateRowItems(ele));
      }
      setMetaData(updateData);
    }
  }, [data]);

  // console.log(data);
  return (
    <Box>
      {isLoading && "Loading..."}
      {!isLoading && metaData?.length > 0 && (
        <Grid container gap={2} justifyContent={"center"}>
          {metaData?.map((item) => (
            <SingleMetaCard key={item?.title} item={item} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default AdminMeta;
