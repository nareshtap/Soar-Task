import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DashboardState } from "../../utils/types/dashboard";

const initialState: DashboardState = {
  cards: [],
  transactions: [],
  weeklyActivity: { deposit: [], withdraw: [] },
  expenseStatistics: {
    entertainment: 0,
    billExpenses: 0,
    investment: 0,
    others: 0,
  },
  balanceHistory: [],
  loading: false,
};

export const fetchDashboardData = createAsyncThunk(
  "dashboard/fetchData",
  async () => {
    const response = await axios.get("http://localhost:3001/dashboard");
    return response.data;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchDashboardData.fulfilled,
        (state, action: PayloadAction<DashboardState>) => {
          state.loading = false;
          state.cards = action.payload.cards;
          state.transactions = action.payload.transactions;
          state.weeklyActivity = action.payload.weeklyActivity;
          state.expenseStatistics = action.payload.expenseStatistics;
          state.balanceHistory = action.payload.balanceHistory;
        }
      )
      .addCase(fetchDashboardData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default dashboardSlice.reducer;
