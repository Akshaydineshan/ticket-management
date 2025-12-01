export interface User {
  id: number;
  username: string;
  email: string;
  password: string; // Consider removing this in production for security reasons
  role: string; // e.g., 'admin', 'user'
  createdAt: Date;
  updatedAt: Date;
}