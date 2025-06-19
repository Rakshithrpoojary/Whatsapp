import React, { useEffect, useState } from "react";
import "../Styles/Sendmessage.css";
import { BsEmojiSmile } from "react-icons/bs";
import { GrFormAttachment } from "react-icons/gr";
import { LuSendHorizonal } from "react-icons/lu";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Messagedisplay } from "../Slices/Messageslice";
import useImageMessage from "../Customhooks/ImageMessage";
import Imagemessage from "./Imagemessage";
import { LuLoader2 } from "react-icons/lu";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function Sendmessage({ Idone }) {
  const [imagse, noimages] = useState();
  const [image, noimage] = useState();
  // const { image, Images, imagse } = useImageMessage();
  const [set, reset] = useState("");
  const formData = new FormData();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state?.two);
  console.log(selector?.loading);
  function Messagesent() {
    if (!set && !imagse) {
      console.log("RETURN");
      return;
    }
    console.log(imagse);
    formData.append("senderid", Idone?.sender);
    formData.append("Reciverid", Idone?.reciver);
    formData.append("message", set);
    formData.append("Sendimage", imagse);
    console.log(formData);
    noimages("");

    dispatch(Messagedisplay.Loadingone());
    // const senddata = {
    //   senderid: Idone.sender,
    //   Reciverid: Idone.reciver,
    //   message: set,
    //   Sendimage: image,
    // };
    axios({
      method: "post",
      url: "http://localhost:3001/api/v1/message/messagesent",
      data: formData,
      withCredentials: "include",
      headers: { "Content-Type": "multipart/form-data" },
    })
      // .post("http://localhost:3001/api/v1/message/messagesent", formData, {
      //   withCredentials: true,
      // })
      .then((response) => {
        dispatch(
          Messagedisplay.MessageDisplay(response?.data?.data?.Messageid)
        );
        reset("");
        dispatch(Messagedisplay.Loadingfalse());
        dispatch(Messagedisplay.Loadingone());
      })
      .catch((err) => console.log(err.response.data));
  }
  function Images(e) {
    if (e.target.files[0]) {
      // dispatch(Messagedisplay.ReplyImage(e.target.files[0]));
      noimages(e.target.files[0]);
      noimage(URL.createObjectURL(e.target.files[0]));
      dispatch(Messagedisplay.Loadingtrue());
    }
  }
  return (
    <div className="sendmessage-container">
      {selector?.loading && <Imagemessage image={image} />}
      <p className="emoji">
        <BsEmojiSmile />
      </p>
      {/* <form encType="multipart/form-data"> */}
      <label className="attachment">
        <GrFormAttachment />
        <input
          name="Sendimage"
          onChange={(e) => Images(e)}
          style={{ display: "none" }}
          type="file"
        />
      </label>
      <input
        value={set}
        onChange={(e) => reset(e.target.value)}
        placeholder="Type message"
        className="message-box"
      />

      {selector.loadingone ? (
        <div class="clearfix">
          <div className="spinner-border float-end" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <p onClick={Messagesent} className="send-icon">
          <LuSendHorizonal />
        </p>
      )}
      {/* <motion.p
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
      >
        <LuLoader2 />
      </motion.p> */}
    </div>
  );
}

export default Sendmessage;

// useEffect(() => {
//   const formData = new FormData(); // Initialize formData here

//   if (image) {
//     console.log("send", image);

//     formData.append("Sendimage", image);
//     SendImage(formData);
//   }

//   console.log("send", formData);

//   function SendImage(formData) {
//     axios
//       .post("http://localhost:3001/api/v1/message/messagesent", formData, {
//         withCredentials: true,
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((response) => console.log(response.data))
//       .catch((err) => console.log(err.response.data));
//   }
// }, [image]);
