import {createSlice} from "@reduxjs/toolkit";
// import profile from "../data/profile.json";
const initialProfile = {
  firstName: 'Jose',
  lastName: 'Annunziato',
  handle: '@jannunzi',
  profilePicture: 'jose.jpeg',
  bannerPicture: 'polyglot.jpeg',
  bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast Retuits and likes are not endorsements.',
  website: 'youtube.com/webdevtv',
  location: 'Boston, MA',
  dateOfBirth: '7/7/1968',
  dateJoined: '4/2009',
  followingCount: 340,
  followersCount: 223
}

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialProfile,
  reducers: {
    changeProfile(state, action) {
      console.log("update profile in the reducer");
      state = {...action.payload};
      console.log("updated profile firstName is " +state.firstName);
    },
  },
})

export const {changeProfile} = profileSlice.actions
export default profileSlice.reducer