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
      console.log("updating profile in the reducer");
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.handle = action.payload.handle;
      state.bio = action.payload.bio;
      state.location = action.payload.location;
      state.dateOfBirth = action.payload.dateOfBirth;

      // const updatedProfile = action.payload;
      // console.log("action payload: "+action.payload)
      // console.log(updatedProfile.firstName);
      // console.log(updatedProfile.lastName);
      // state = {...initialProfile,
      // firstName: updatedProfile.firstName,
      // lastName: updatedProfile.lastName,
      // bio: updatedProfile.bio,
      // website: updatedProfile.website,
      // dateOfBirth: updatedProfile.dateOfBirth};
      console.log("updated profile firstName is " +state.firstName);
    },
  },
})

export const {changeProfile} = profileSlice.actions
export default profileSlice.reducer