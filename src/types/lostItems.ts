export interface LostItem {
  id: string;
  userId: string;
  category: string;
  founded: boolean;
  name: string;
  description: string;
  DateAndlocation: string;
  phone: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
}
