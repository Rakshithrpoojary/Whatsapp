import jwt from "jsonwebtoken";
import { User } from "../Models/User.Model.js";
import { Error } from "../Utils/Customerror.js";
export const VerifyJwt = async (req, res, next) => {
  try {
    // console.log(req.cookies?.AccessToken);
    const Token =
      req.cookies?.AccessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!Token) {
      throw new Error("Invalid Token", 400);
    }
    const Verify = jwt.verify(Token, process.env.ACCESS_TOKEN_SECREAT);
    if (!Verify) {
      throw new Error("Token invalid", 400);
    }
    const Logedinuser = await User.findById(Verify._id);
    req.user = Logedinuser;
    next();
  } catch (error) {
    next(error);
  }
};
