import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Level = 0 | 1 | 2 | 3 | 4;

export interface GitStreak {
  count: number;
  level: Level;
  date: string;
}

export interface Language {
  languages: string[];
}

export interface Streak {
  date: string;
  email: string;
  streak: number;
}
export interface userdailystats {
  earlyMorning: string;
  lateNight: string;
}

export interface UserStat {
  uniqueId: string;
  gitStreak: GitStreak;
  languages: Language;
  streak: Streak;
  userdailystats: userdailystats[];
}

const initialValueOfUserStats: UserStat = {
  uniqueId: "",
  gitStreak: { count: 0, date: "", level: 0 },
  languages: { languages: [] },
  streak: { date: "", email: "", streak: 0 },
  userdailystats: [{ earlyMorning: "", lateNight: "" }],
};

const userStatSlicerReducer = createSlice({
  name: "UserStat",
  initialState: initialValueOfUserStats,
  reducers: {
    addTheStats: (state, action: PayloadAction<UserStat>) => {
      console.log("kjsdfskfdkofdsokf");
      state.uniqueId = action.payload.uniqueId;
      state.gitStreak = action.payload.gitStreak;
      state.languages = action.payload.languages;
      state.streak = action.payload.streak;
      state.userdailystats = action.payload.userdailystats;
    },
    getUserStreak: (state) => {
      return state;
    },
  },
});

export const { addTheStats, getUserStreak } = userStatSlicerReducer.actions;
export default userStatSlicerReducer.reducer;
