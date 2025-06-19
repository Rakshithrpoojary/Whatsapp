import React from "react";
import "../Styles/Chatcomponent.css";
import Sendmessage from "./Sendmessage";
import Message from "./Message";
import { useParams } from "react-router-dom";
import Reciverinfo from "./Reciverinfo";
import Imagemessage from "./Imagemessage";

function Chatcomponent() {
  const { senderid, reciverid, username, userimage } = useParams();
  return (
    <div className="Chat-container">
      <Reciverinfo Userdata={{ username, userimage }} />
      <Message Id={{ sender: senderid, reciver: reciverid }} />
      <Sendmessage Idone={{ sender: senderid, reciver: reciverid }} />
    </div>
  );
}

export default Chatcomponent;
