import { useSocketCOntext } from "../Store/Socketcontext";
import { Loginslicedata } from "../Slices/Loginslice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export const useGetalluser = () => {
  const dispatch = useDispatch();
  const { sockett } = useSocketCOntext();
  useEffect(() => {
    sockett?.on("Getalluser", (data) => {
      console.log("SIGNIN", data);
      dispatch(Loginslicedata.LoginOne(data));
    });
    return () => sockett?.off("getalluser");
  }, [sockett]);
};
