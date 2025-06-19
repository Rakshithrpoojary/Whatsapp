import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loginslicedata } from "../Slices/Loginslice";
import { useDispatch } from "react-redux";
export function useSignup() {
  const dispatch = useDispatch();

  const signup = async (user) => {
    try {
      const Validation = Validator(user);
      if (!Validation) return;
      const userregister = await axios.post(
        "http://localhost:3001/api/v1/user/register",
        user
      );
      dispatch(Loginslicedata.Signup(userregister.data.statuscode));
      toast.success(userregister.data.message);
    } catch (error) {
      dispatch(Loginslicedata?.Signup(error.response.data.statuscode));
      toast.error(error.response.data.message);
    }
  };
  return { signup };
}

const Validator = (data) => {
  if (!data.username && !data.email && !data.password) {
    toast.error("All fields are required");
    return false;
  }
  if (!data.username || !data.email || !data.password) {
    toast.error("Fill all the fields");
    return false;
  }
  if (data.password.length < 6) {
    toast.error("Password length must be above 6 letters");
    return false;
  } else {
    return true;
  }
};
