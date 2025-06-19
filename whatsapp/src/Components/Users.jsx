import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../Styles/Users.css";
import { Link, useNavigate, Navigate } from "react-router-dom";
import "../Styles/Users.css";
import { useParams } from "react-router-dom";
import { useSocketCOntext } from "../Store/Socketcontext";
import { useGetalluser } from "../Customhooks/Getalluser";

function Users() {
  const { reciverid } = useParams();
  const { onLineusers } = useSocketCOntext();
  console.log(onLineusers);
  // useGetalluser();
  const nav = useNavigate();
  const Logindata = useSelector((state) => state.one.Logindata);
  const [set, reset] = useState("");
  console.log(Logindata);
  const handleUserClick = (op) => {
    const url = `/welcome/chatcomponent/${Logindata.one._id}/${op._id}/${
      op.username
    }/${op.userimage ? encodeURIComponent(op.userimage) : "image"}`;
    nav(url);
  };
  return (
    <div>
      {Logindata.two.map((op, index) => (
        <div className="Linksender" onClick={() => handleUserClick(op)}>
          <span
            // style={{ backgroundColor: set === op._id ? "grey" : "" }}
            className="Users-container"
          >
            <img
              src={op.imageuser ? op.imageuser : "/Images/download copy 2.png"}
              className="user-image"
            />
            <div className={onLineusers?.includes(op._id) ? "available" : ""} />
            <p className="usernamee">{op.username}</p>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
