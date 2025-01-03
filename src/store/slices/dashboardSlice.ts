import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DashboardState } from "../../utils/types/dashboard";
import axiosInstance from "../../utils/axiosInstance/axiosInstance";

const initialState: DashboardState = {
  users: [],
  cards: [],
  transactions: [],
  weeklyActivity: [],
  expenseStatistics: [],
  balanceHistory: [],
  frequentTransfers: [],
  loading: true,
};

export const fetchDashboardData = createAsyncThunk(
  "dashboard/fetchData",
  async () => {
    const response = await axiosInstance.get(`/dashboard`);
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
          state.users = action.payload.users;
          state.cards = action.payload.cards;
          state.transactions = action.payload.transactions;
          state.weeklyActivity = action.payload.weeklyActivity;
          state.expenseStatistics = action.payload.expenseStatistics;
          state.balanceHistory = action.payload.balanceHistory;
          state.frequentTransfers = action.payload.frequentTransfers;
        }
      )
      .addCase(fetchDashboardData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default dashboardSlice.reducer;
