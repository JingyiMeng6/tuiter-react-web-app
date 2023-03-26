import { createSlice} from "@reduxjs/toolkit";
import profile from "../data/profile.json";

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    changeProfile(state, action) {
    state = {...action.payload};
    }
  },
})

export const {changeProfile} = profileSlice.actions;
export default profileSlice.reducer;