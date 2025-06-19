import { User } from "../Models/User.Model.js";
import { Error } from "../Utils/Customerror.js";
import { Apiresponse } from "../Utils/Apiresponse.js";
import { io } from "../Socket/Socket.js";

const SigninController = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const Usernameexist = await User.findOne({ username });
    if (!Usernameexist) {
      throw new Error("Invalid login credential", 400);
    }

    const passwordchseck = Usernameexist.IspasswordCheck(password);
    if (!passwordchseck) {
      throw new Error("Invalid login credential", 400);
    }
    const AccessToken = Usernameexist.GenerateAccessToken();
    const RefreshToken = Usernameexist.GeneraterefreshToken();
    const options = {
      httpOnly: true,
    };
    const Getalluser = await User.find({})
      .where("username")
      .ne(username)
      .select("-password");

    return res
      .cookie("AccessToken", AccessToken, options)
      .cookie("RefreshToken", RefreshToken, options)
      .json(
        new Apiresponse(
          200,
          { one: Usernameexist, two: Getalluser, three: AccessToken },
          "User Loggedin succesfully"
        )
      );
  } catch (error) {
    next(error);
  }
};
export { SigninController };
