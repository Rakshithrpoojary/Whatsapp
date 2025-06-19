import { createSlice } from "@reduxjs/toolkit";
const MessageSlice = createSlice({
  name: "Message",
  initialState: {
    Message: [],
    replyimage: null,
    loading: false,
    loadingone: false,
  },
  reducers: {
    MessageDisplay: (state, action) => {
      console.log(action.payload);
      state.Message = action.payload;
    },
    UpdateMessage: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        Message: [...state.Message, action.payload],
      };
    },
    Loadingone: (state, action) => {
      state.loadingone = !state.loadingone;
    },

    Loadingtrue: (state, action) => {
      state.loading = true;
    },
    Loadingfalse: (state, action) => {
      state.loading = false;
    },
  },
});
export const Messagedisplay = MessageSlice.actions;
export default MessageSlice;
