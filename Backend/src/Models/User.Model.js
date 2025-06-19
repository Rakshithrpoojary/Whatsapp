import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Userschema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  imageuser: {
    type: String,
  },
});
Userschema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
Userschema.methods.IspasswordCheck = async function (password) {
  const passwordcheck = await bcrypt.compare(password, this.password);
  return passwordcheck;
};
Userschema.methods.GeneraterefreshToken = function () {
  const RefreshToken = jwt.sign(
    { _id: this._id, username: this.username },
    process.env.REFRESH_TOKEN_SECREAT,
    { expiresIn: process.env.EXPIRY_TIME }
  );
  return RefreshToken;
};
Userschema.methods.GenerateAccessToken = function () {
  const AccessToken = jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECREAT,
    { expiresIn: process.env.EXPIRY_TIME }
  );
  return AccessToken;
};
export const User = model("User", Userschema);
// Usermodel.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });
