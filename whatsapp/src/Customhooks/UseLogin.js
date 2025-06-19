import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Loginslicedata } from "../Slices/Loginslice";
import { useDispatch } from "react-redux";

function UseLogin() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const signin = async (e, signindata) => {
    e.preventDefault();
    try {
      const validation = ValidateFields(signindata);
      if (!validation) return;
      const signinfetch = await axios.post(
        "http://localhost:3001/api/v1/user/signin",
        signindata,
        { withCredentials: "include" }
      );
      dispatch(Loginslicedata.Login(signinfetch.data.data));
      dispatch(Loginslicedata.Token(signinfetch.data.data.three));
      console.log("signinfetch", signinfetch.data.data);
      nav("/welcome");
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return { signin };
}
export default UseLogin;

function ValidateFields(data) {
  if (!data.username && !data.password) {
    toast.error("Fill all fields");
    return false;
  }
  if (!data.username || !data.password) {
    toast.error("Fill all fields");
    return false;
  } else {
    return true;
  }
}
