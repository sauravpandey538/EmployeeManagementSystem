import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FormState } from "../formControl";

export const fetchSingleEmployee = createAsyncThunk(
  "single/fetchEmployee",
  async (employeeId: string) => {
    const response = await axios.post("/api/getSingleEmployee", { employeeId });
    return response.data.targetedEmployee;
  }
);

interface ApiState {
  isLoading: boolean;
  isError: boolean;
  data: FormState | null;
}

const initialState: ApiState = {
  isLoading: false,
  isError: false,
  data: null,
};

// Create the slice
export const singleSlice = createSlice({
  name: "single",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleEmployee.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        fetchSingleEmployee.fulfilled,
        (state, action: PayloadAction<FormState>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchSingleEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error(action.error.message);
      });
  },
});

export default singleSlice.reducer;
