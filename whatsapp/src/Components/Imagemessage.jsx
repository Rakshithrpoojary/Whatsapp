import React from "react";
import "../Styles/Imagemessage.css";
import useImageMessage from "../Customhooks/ImageMessage";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Messagedisplay } from "../Slices/Messageslice";

function Imagemessage({ image }) {
  const dispatch = useDispatch();
  console.log(image);
  return (
    <div className="imagemessage-container">
      <p
        onClick={() => dispatch(Messagedisplay.Loadingfalse())}
        className="close-icon"
      >
        <AiOutlineClose />
      </p>
      <img src={image} className="imagemessage" />
    </div>
  );
}

export default Imagemessage;
