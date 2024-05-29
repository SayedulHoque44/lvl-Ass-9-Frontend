"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useGetALLFoundItemsQuery } from "@/redux/api/foundItemAPi";
import SingleFoundCard from "./components/foundReports/SingleFoundCard";
import RecentLostItemPosts from "@/components/ui/HomePage/RecentLostItems";

import SearchInput from "@/components/shared/Input/SearchInput";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import SelectField from "@/components/shared/Input/SelectField";
import { categoriesSelect } from "@/constants/common";
import { generateMenuItems } from "@/utils/common";
import RecentFounds from "./components/foundReports/RecentFounds";
import RecentLosts from "./components/lostReports/RecentLosts";

const reportMenuItems = ["Found Reports", "Lost Reports"];

const page = () => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState("");
  const [reportType, setReportType] = useState("Found Reports");

  const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 2000 });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }
  if (!!category) {
    query["category"] = category;
  }

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} textAlign={"center"}>
        Recent Reports
      </Typography>
      {/*  */}

      <Stack direction={"row"} justifyContent={"space-between"}>
        <SearchInput handleSearch={(e) => setSearchTerm(e.target.value)} />
        <Stack direction={"row"} gap={2} alignItems={"center"}>
          <SelectField
            handleSelect={(e) => setCategory(e.target.value)}
            value={category}
            menuItems={generateMenuItems(categoriesSelect)}
            label="Category"
          />
          <SelectField
            handleSelect={(e) => setReportType(e.target.value)}
            value={reportType}
            menuItems={generateMenuItems(reportMenuItems)}
            label="Reports Type"
          />
        </Stack>
      </Stack>
      {reportType === "Found Reports" && <RecentFounds query={query} />}
      {reportType === "Lost Reports" && <RecentLosts query={query} />}
    </Box>
  );
};

export default page;
