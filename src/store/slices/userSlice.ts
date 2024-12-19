import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserState } from "../../utils/types/users";

const initialState: UserState = {
  users: [],
  loading: true,
};

export const fetchUsersData = createAsyncThunk(
  "user/fetchUsersData",
  async () => {
    const response = await axios.get("http://localhost:3001/dashboard");
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
