"use client";
import { Box, Grid, SvgIconTypeMap } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleMetaCard from "../SingleMetaCard";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useGetUserMetaQuery } from "@/redux/api/userApi";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { TMetaDataProps } from "../admin";

const generateRowItems = ([key, value]: any) => {
  switch (key) {
    case "totalFoundItems":
      return {
        title: "Total Found Items",
        amount: value,
        icon: PeopleIcon,
      };

    case "totalLostItems":
      return {
        title: "Total Lost Items",
        amount: value,
        icon: ArticleIcon,
      };

    case "totalClaimRequest":
      return {
        title: "Total Claim Request",
        amount: value,
        icon: ArticleIcon,
      };

    case "totalClaimedReport":
      return {
        title: "Total Claimed Report",
        amount: value,
        icon: ArticleIcon,
      };

    default:
      break;
  }
};

const UserMeta = () => {
  const { data, isLoading } = useGetUserMetaQuery({});
  const [metaData, setMetaData] = useState<any>([]);

  useEffect(() => {
    if (data) {
      const updateData = [];
      for (const ele of Object.entries(data)) {
        updateData.push(generateRowItems(ele));
      }
      setMetaData(updateData);
    }
  }, [data]);

  return (
    <Box>
      {isLoading && "Loading..."}
      {!isLoading && metaData && metaData?.length > 0 && (
        <Grid container gap={2} justifyContent={"center"}>
          {metaData?.map((item: TMetaDataProps) => (
            <SingleMetaCard key={item?.title} item={item} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default UserMeta;
