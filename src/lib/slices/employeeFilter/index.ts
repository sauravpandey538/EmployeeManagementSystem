import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FormState } from "../formControl";

export const fetchFilterEmployee = createAsyncThunk(
  "filter/fetchFilterEmployee",
  async (filterData: Partial<FormState>) => {
    const response = await axios.post("/api/filter", filterData);
    return response.data.employees;
  }
);

interface ApiState {
  isLoading: boolean;
  isError: boolean;
  data: FormState[] | null;
}

const initialState: ApiState = {
  isLoading: false,
  isError: false,
  data: null,
};

// Create the slice
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilterEmployee.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        fetchFilterEmployee.fulfilled,
        (state, action: PayloadAction<FormState[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchFilterEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error(action.error.message);
      });
  },
});

export default filterSlice.reducer;
