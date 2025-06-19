import { Schema, model } from "mongoose";

const Messagemodel = new Schema(
  {
    Loginuserid: {
      type: String,
      required: true,
    },
    LogedinuserImage: {
      type: String,
    },
    message: {
      type: String,
    },
    images: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Message = model("Message", Messagemodel);
