export interface UsersTableProps {
  data: UserData[];
}

export interface UserData {
  id: number;
  email: string;
  website: string;
  phone: string;
  username: string;
  company: {
    name: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
  };
}
