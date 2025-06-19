import React, { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Loginslicedata } from "../Slices/Loginslice";

export const Context = createContext();

export const useContexthook = () => {
  const usecontext = useContext(Context);
  return usecontext;
};
function Storecontext({ children }) {
  const dispatch = useDispatch();
  const nav = useNavigate();
  function Logout() {
    console.log("LOGOUT");
    dispatch(Loginslicedata.CLearToken());
    axios
      .get("http://localhost:3001/api/v1/user/logout", {
        withCredentials: "include",
      })
      .then((response) => console.log(response.data), nav("/"))
      .catch((error) => console.log(error.response.data));
  }
  return (
    <div>
      <Context.Provider value={{ Logout }}>{children}</Context.Provider>
    </div>
  );
}

export default Storecontext;
