import { useEffect } from "react";
import { useSocketCOntext } from "../Store/Socketcontext";
import { Messagedisplay } from "../Slices/Messageslice";
import { useDispatch } from "react-redux";

export const useMessage = () => {
  const dispatch = useDispatch();
  const { sockett } = useSocketCOntext();
  useEffect(() => {
    sockett?.on("Message", (message) => {
      dispatch(Messagedisplay.UpdateMessage(message));
    });
    return () => sockett?.off("Message");
  }, [sockett]);
};
