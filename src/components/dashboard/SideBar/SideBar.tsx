import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { UserRole } from "@/types";

import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import Logo from "@/components/shared/Logo";
import { drawerItems } from "@/utils/drawerItems";

const SideBar = () => {
  const [userRoleInfo, setUserRoleInfo] = useState<any>("");

  useEffect(() => {
    const { role, id } = getUserInfo() as any;
    setUserRoleInfo({ role, id });
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Logo />
      </Stack>
      <List>
        {drawerItems(userRoleInfo?.role as UserRole, userRoleInfo?.id).map(
          (item: any, index: number) => (
            <SidebarItem key={index} item={item} />
          )
        )}
      </List>
    </Box>
  );
};

export default SideBar;
