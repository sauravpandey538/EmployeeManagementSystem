import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface FormState {
  fullName: string;
  email: string;
  address: string;
  type: string;
  holiday: string[];
  info: string;
  joinedAt: string;
  workingTime: string;
  cv: string;
  image: string;
  phoneNumber: string;
  id?: any;
}

const initialState: FormState = {
  fullName: "",
  email: "",
  address: "",
  type: "",
  holiday: [],
  info: "",
  joinedAt: "",
  workingTime: "",
  cv: "",
  image: "",
  phoneNumber: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateEmployeeData: (
      state: any,
      action: PayloadAction<{ field: keyof FormState; value: any }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    getEmployeeData: (state) => state,
  },
});

export const { updateEmployeeData, getEmployeeData } = formSlice.actions;
export default formSlice.reducer;

// demo
// dispatch(updateEmployeeData({ field: "fullName", value: "John Doe" }));
