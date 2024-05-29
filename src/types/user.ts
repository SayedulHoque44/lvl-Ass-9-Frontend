import { Claim, TFoundItem } from "./foundItem";
import { LostItem } from "./lostItems";

export interface TUser {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN"; // Assuming possible roles
  createdAt: string;
  updatedAt: string;
  isActive: "ACTIVE" | "INACTIVE"; // Assuming possible statuses

  Claim: Claim[];
  FoundItem: TFoundItem[];
  LostItem: LostItem[];
}
