import React from "react";
import "../Styles/Peoples.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import Search from "./Search";
import Users from "./Users";
import UseLogin from "../Customhooks/UseLogin";
import { useSelector } from "react-redux";
import { IoMdLogOut } from "react-icons/io";
import { useContexthook } from "../Store/Context";

function Peoples() {
  const { Logout } = useContexthook();
  const Logindata = useSelector((state) => state.one.Logindata);
  console.log("Logindata", Logindata);

  return (
    <div className="people-container">
      <span className="logo-container">
        <p className="logo">
          <FaWhatsapp />
        </p>
        <p className="whatsapp-text">Whatsapp</p>
        <p onClick={Logout} className="logout">
          <IoMdLogOut />
        </p>
      </span>
      <hr />
      <span className="userinfo-container">
        <img
          src={
            Logindata?.one?.imageuser
              ? Logindata?.one?.imageuser
              : "/Images/download copy 2.png"
          }
          className="userimage"
        />
        <p className="chats">Chats</p>
        <p className="Typing">
          <FaPenToSquare />
        </p>
        <p className="details">
          <BsThreeDots />
        </p>
      </span>
      <Search />
      <Users />
    </div>
  );
}

export default Peoples;
