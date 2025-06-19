import { fileUpload } from "../Utils/Fileupload.js";
import { Apiresponse } from "../Utils/Apiresponse.js";
import { User } from "../Models/User.Model.js";
import { Error } from "../Utils/Customerror.js";
import { io } from "../Socket/Socket.js";
const UserCOntroller = async (req, res, next) => {
  try {
    const { username, password, email, imageuser, country } = req.body;
    console.log(req.body);
    // console.log(req.file);
    if (req.file) {
      const pathimage = req.file.path;
      const uploadedfile = await fileUpload(pathimage);
      return res
        .status(200)
        .json(
          new Apiresponse(200, uploadedfile.url, "Image uploaded succesfully")
        );
    }
    if (username && password && email && country) {
      console.log(req.body);
      const UserExist = await User.findOne({
        $or: [{ username: username }, { email: email }],
      });
      console.log(UserExist?.length);
      if (UserExist?.length > 0) {
        throw new Error("Username or email already exist", 400);
      }
      const createddoc = await User.create({
        username,
        password,
        email,
        imageuser,
        country,
      });
      // io.emit("Getalluser", createddoc);

      console.log("createddoc", createddoc);
      res
        .status(200)
        .json(new Apiresponse(200, createddoc, "User registerd succesfully"));
    }
  } catch (error) {
    // console.log(error.message, error.statusCode);
    next(error);
  }
};
export { UserCOntroller };
