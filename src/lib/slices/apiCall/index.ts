import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FormState } from "../formControl";
import axios from "axios";

// Define the async thunk for fetching employee data
export const fetchEmployee = createAsyncThunk("fetchEmployee", async () => {
  const response = await axios.get("/api/getUsers");
  return response.data;
});

// Define the initial state with proper types
interface ApiState {
  isLoading: boolean;
  isError: boolean;
  data: FormState | any; // You can replace `any` with a specific type if you know the structure of your data
}

const initialState: ApiState = {
  isLoading: false,
  isError: false,
  data: null,
};

// Create the slice
export const apiSlice = createSlice({
  name: "employeeApi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployee.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchEmployee.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error(action.error.message);
      });
  },
});

export default apiSlice.reducer;
