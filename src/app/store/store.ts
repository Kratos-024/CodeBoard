import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../../function/User/UserSlicer";

export const store = configureStore({
  reducer: { userAccountReducer: UserReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
