import { Apiresponse } from "../Utils/Apiresponse.js";

export const Logout = (req, res, next) => {
  try {
    const options = {
      httpOnly: true,
    };
    return res
      .clearCookie("AccessToken", options)
      .clearCookie("RefreshToken", options)
      .status(200)
      .json(new Apiresponse(200, null, "User logouted succesfully"));
  } catch (error) {
    next(error);
  }
};
