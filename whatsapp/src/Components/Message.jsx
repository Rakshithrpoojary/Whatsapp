import React, { useEffect } from "react";
import "../Styles/Message.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Messagedisplay } from "../Slices/Messageslice";
import ScrollToBottom from "react-scroll-to-bottom";
import { formatDistanceToNow } from "date-fns";
import { useMessage } from "../Customhooks/Messagesocket";
import Startconversation from "./Startconversation";

function Message({ Id }) {
  const dispatch = useDispatch();
  const Messagedisplayed = useSelector((state) => state.two.Message);
  console.log("Messagedisplayed", Messagedisplayed);
  console.log(Id.sender, Id.reciver);
  useMessage();
  useEffect(() => {
    const Data = { senderid: Id.sender, Reciverid: Id.reciver };
    axios
      .post("http://localhost:3001/api/v1/message/messagesent", Data, {
        withCredentials: "include",
      })
      .then(
        (response) => (
          dispatch(
            Messagedisplay.MessageDisplay(response?.data?.data?.Messageid)
          ),
          console.log("executing")
        )
      )
      .catch((err) => console.log(err.response.data));
  }, []);
  return (
    <ScrollToBottom className="Displaymessagefull-container">
      {!Messagedisplayed && <Startconversation />}
      {Messagedisplayed?.length > 0 &&
        Messagedisplayed?.map(
          (op) => (
            console.log(op.Loginuserid),
            (
              <span className={"displaymessage-container"}>
                {!(op.Loginuserid === Id.sender) && (
                  <img
                    src={
                      op.LogedinuserImage
                        ? op.LogedinuserImage
                        : "/Images/download copy 2.png"
                    }
                    className={"displayuserimage"}
                  />
                )}

                <div className="replywithimage">
                  {op?.images && (
                    <img
                      className={
                        op.Loginuserid === Id.sender
                          ? "displaymessages"
                          : "displaymessage"
                      }
                      src={op?.images}
                    />
                  )}
                  {op?.message && (
                    <p
                      className={
                        op.Loginuserid === Id.sender
                          ? "displaymessages"
                          : "displaymessage"
                      }
                    >
                      {op.message}
                    </p>
                  )}
                </div>
                <p
                  className={
                    op.Loginuserid === Id.sender ? "sender" : "reciver"
                  }
                >
                  {formatDistanceToNow(new Date(op?.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </span>
            )
          )
        )}
    </ScrollToBottom>
  );
}

export default Message;
