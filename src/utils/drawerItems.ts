import { DrawerItem, UserRole } from "@/types";
import ArticleIcon from "@mui/icons-material/Article";
//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import TryIcon from "@mui/icons-material/Try";
import { USER_ROLE } from "@/constants/role";
import PersonIcon from "@mui/icons-material/Person";
import KeyOffIcon from "@mui/icons-material/KeyOff";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

export const drawerItems = (role: UserRole, id: string): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push({
        title: "User Managment",
        path: `${role}/user-managment`,
        icon: GroupIcon,
      });
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Lost Reports",
          path: `${role}/lost-reports`,
          icon: ArticleIcon,
        },
        {
          title: "Found Reports",
          path: `${role}/found-reports`,
          icon: ArticleIcon,
        },
        {
          title: "Claim Reports",
          path: `${role}/claim-reports`,
          icon: ArticleIcon,
        }
      );
      break;
    default:
      break;
  }

  return [
    { title: "Dashboard", path: `/`, icon: ViewModuleIcon },
    ...roleMenus,
    { title: "Recent Post", path: `recent-posts`, icon: ViewModuleIcon },
    { title: "My Profile", path: `my-profile`, icon: PersonIcon },
    { title: "Change Password", path: `change-password`, icon: KeyOffIcon },
  ];
};
