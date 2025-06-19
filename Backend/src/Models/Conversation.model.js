import mongoose, { Schema, model } from "mongoose";
const Conversation = new Schema(
  {
    Users: [
      {
        type: String,
      },
    ],
    Messageid: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Message",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ConversationofUser = model("ConversationofUser", Conversation);
