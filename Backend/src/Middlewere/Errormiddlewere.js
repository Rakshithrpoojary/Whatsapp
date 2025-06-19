import { Apiresponse } from "../Utils/Apiresponse.js";
const Errormiddlewer = async (err, req, res, next) => {
  console.log(err.message, err.statusCode);
  return res
    .status(err.statusCode)
    .json(new Apiresponse(err.statusCode, null, err.message));
  // return res
  //   .status(err.statusCode)
  //   .json(new Apiresponse(err.statusCode, null, err.message));
};
export { Errormiddlewer };
