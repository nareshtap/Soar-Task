export interface DashboardState {
  users: Array<{
    id: number;
    name: string;
    username: string;
    email: string;
    dob: string;
    presentAddress: string;
    permanentAddress: string;
    city: string;
    postalCode: string;
    country: string;
    profilePicture: string;
    password: string;
  }>;
  cards: Array<{
    id: number;
    userId: number;
    cardHolder: string;
    cardNumber: string;
    balance: number;
    type: string;
  }>;
  transactions: Array<{
    id: number;
    userId: number;
    icon: string;
    description: string;
    date: string;
    amount: number;
    type: string;
  }>;
  weeklyActivity: Array<{
    day: string;
    deposit: number;
    withdrawal: number;
  }>;
  expenseStatistics: Array<{
    category: string;
    amount: number;
  }>;
  balanceHistory: Array<{
    month: string;
    balance: number;
  }>;
  frequentTransfers: Array<{
    id: number;
    userId: number;
    name: string;
    role: string;
    profilePicture: string;
  }>;
  loading: boolean;
}
