import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserSlicer {
  avatarUrl: string;
  userName: string;
  fullName: string;
  userId: string;
  bio: string;
  email: string;
  login: boolean;
  darkMode?: boolean;
}

export const UserinitialStore: UserSlicer = {
  avatarUrl: "",
  userName: "",
  fullName: "",
  userId: "",
  bio: "",
  email: "",
  login: false,
  darkMode: false,
};

const UserSlicerReducer = createSlice({
  name: "User",
  initialState: UserinitialStore,
  reducers: {
    addTheUser: (state, action: PayloadAction<UserSlicer>) => {
      console.log("came", action.payload);
      state.avatarUrl = action.payload.avatarUrl;
      state.userName = action.payload.userName;
      state.fullName = action.payload.fullName;
      state.userId = action.payload.userId;
      state.bio = action.payload.bio;
      state.email = action.payload.email;
      state.login = action.payload.login;
    },
    getTheUser: (state) => {
      return state;
    },
    darkModeHandler: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const { addTheUser, getTheUser, darkModeHandler } =
  UserSlicerReducer.actions;
export default UserSlicerReducer.reducer;
