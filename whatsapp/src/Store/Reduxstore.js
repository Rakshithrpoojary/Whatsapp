import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../Slices/Loginslice";
import MessageSlice from "../Slices/Messageslice";

const Store = configureStore({
  reducer: {
    one: LoginSlice.reducer,
    two: MessageSlice.reducer,
  },
});
export default Store;
