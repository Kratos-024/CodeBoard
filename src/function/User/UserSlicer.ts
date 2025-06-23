import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserSlicer {
  avatarUrl: string;
  userName: string;
  fullName: string;
  userId: string;
}

export const UserinitialStore: UserSlicer = {
  avatarUrl: "",
  userName: "",
  fullName: "",
  userId: "",
};

const UserSlicerReducer = createSlice({
  name: "User",
  initialState: UserinitialStore,
  reducers: {
    addTheUser: (state, action: PayloadAction<UserSlicer>) => {
      state.avatarUrl = action.payload.avatarUrl;
      state.userName = action.payload.userName;
      state.fullName = action.payload.fullName;
      state.userId = action.payload.userId;
    },
    getTheUser: () => {
      return UserinitialStore;
    },
  },
});

export const { addTheUser, getTheUser } = UserSlicerReducer.actions;
export default UserSlicerReducer.reducer;
