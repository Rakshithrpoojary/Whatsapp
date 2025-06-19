import { createSlice } from "@reduxjs/toolkit";
const LoginSlice = createSlice({
  name: "Login",
  initialState: {
    Logindata: {},
    Signupdata: {},
    Userimage: "",
    AccessToken: "",
  },
  reducers: {
    Signup: (state, action) => {
      console.log(action.payload);
      state.Signupdata = action.payload;
    },
    Login: (state, action) => {
      console.log(action.payload);
      state.Logindata = action.payload;
    },
    // LoginOne: (state, action) => {
    //   return {
    //     ...state,
    //     Logindata: [...state.Logindata.two, action.payload],
    //   };
    // },
    UserImage: (state, action) => {
      console.log(action.payload);
      state.Userimage = action.payload;
    },
    Token: (state, action) => {
      state.AccessToken = action.payload;
    },
    CLearToken: (state, action) => {
      state.AccessToken = "";
    },
  },
});
export const Loginslicedata = LoginSlice.actions;
export default LoginSlice;
