export interface Card {
    id: number;
    balance: number;
    cardHolder: string;
    cardNumber: string; 
    validThru: string; 
}

export interface Transaction {
    id: number;
    icon: string;
    description: string;
    date: string;
    amount: number; 
}

export interface WeeklyActivity {
    deposit: number[]; 
    withdraw: number[];
}

export interface ExpenseStatistics {
    entertainment: number;
    billExpenses: number;
    investment: number;
    others: number;
}

type BalanceHistory = number[]; 

export interface DashboardState {
    cards: Card[];
    transactions: Transaction[];
    weeklyActivity: WeeklyActivity;
    expenseStatistics: ExpenseStatistics;
    balanceHistory: BalanceHistory;
    loading: boolean;
}
