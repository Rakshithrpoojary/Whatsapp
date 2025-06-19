import React from "react";
import "../Styles/Reciverinfo.css";
import { SlCamrecorder } from "react-icons/sl";
import { IoCall } from "react-icons/io5";

function Reciverinfo({ Userdata }) {
  const imageuser = decodeURIComponent(Userdata.userimage);
  console.log("imageuser", imageuser);
  return (
    <div>
      <span className="Reciverinfo-container">
        <img
          className="Reciverinfo-image"
          src={
            imageuser === "image" ? "/Images/download copy 2.png" : imageuser
          }
        />
        <p className="Reciverinfo-username">{Userdata.username}</p>
        <p className="Reciverinfo-phoneicon">
          <IoCall />
        </p>
        <p className="Reciverinfo-recorder">
          <SlCamrecorder />
        </p>
      </span>
    </div>
  );
}

export default Reciverinfo;
