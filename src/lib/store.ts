import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formControl";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
  devTools: true,
});
store.subscribe(() => {
  console.log(store.getState());
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
