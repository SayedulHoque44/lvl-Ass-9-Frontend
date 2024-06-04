// "use client";

import DashboardDrawer from "@/components/dashboard/DashboardDrawer/DashboardDrawer";
import { getUserInfo, isLoggedIn } from "@/services/auth.services";

import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter();
  // const userinfo = getUserInfo();
  // if (!userinfo) {
  //   return router.push("/login");
  // }
  return <DashboardDrawer>{children} </DashboardDrawer>;
};

export default DashboardLayout; //
