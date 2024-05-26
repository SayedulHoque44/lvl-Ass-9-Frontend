interface TUser {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN"; // Assuming possible roles
  createdAt: string;
  updatedAt: string;
  isActive: "ACTIVE" | "INACTIVE"; // Assuming possible statuses
}
