import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Phuc",
    age: 20,
    about: "about",
    avaUrl:
      "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    themeColor: '#ff9051',
  pending: false,
  error: false,
  },
  reducers: {
    updateStart: (state) => { 
      state.pending =true
    },
    updateError: (state) => { 
      state.pending = false
      state.error = true
      
    },
    updateSuccess: (state, action) => { 
      state.pending =false
    },
    // update: (state, action) => {
    //   state.name = action.payload.name;
    //   state.age = action.payload.age;
    //   state.about = action.payload.about;
    //   state.avaUrl = action.payload.avaUrl;
    //   state.themeColor = action.payload.themeColor;
    // },
  },
});

export const {update} = userSlice.actions
export default userSlice.reducer //import bên store.js