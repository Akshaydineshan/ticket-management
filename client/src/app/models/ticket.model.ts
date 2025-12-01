export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  priority: 'Low' | 'Medium' | 'High';
  createdDate: Date;
  updatedDate: Date;
  assignedTo?: string; // Optional field for user assignment
}