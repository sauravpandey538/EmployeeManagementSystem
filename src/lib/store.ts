import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formControl";
import apiReducer from "./slices/apiCall";
export const store = configureStore({
  reducer: {
    form: formReducer,
    api: apiReducer,
  },
  devTools: true,
});
store.subscribe(() => {
  console.log(store.getState());
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
