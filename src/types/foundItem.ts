interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Claim {
  id: string;
  userId: string;
  foundItemId: string;
  status: "PENDING" | "APPROVED" | "REJECTED"; // assuming possible statuses
  distinguishingFeatures: string;
  lostDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface TFoundItem {
  id: string;
  userId: string;
  category: string;
  name: string;
  description: string;
  dateAndLocation: string;
  phone: string | null;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  user: User;
  Claim: Claim[];
}
