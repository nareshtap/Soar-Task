import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { UserState } from "../../utils/types/users";
import axiosInstance from "../../utils/axiosInstance/axiosInstance";

const initialState: UserState = {
  users: [],
  loading: true,
};

export const fetchUsersData = createAsyncThunk(
  "user/fetchUsersData",
  async () => {
    const response = await axiosInstance.get("/dashboard");
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchUsersData.fulfilled,
        (state, action: PayloadAction<UserState>) => {
          state.loading = false;
          state.users = action.payload.users;
        }
      )
      .addCase(fetchUsersData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
