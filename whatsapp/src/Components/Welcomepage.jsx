import React from "react";
import "../Styles/Welcomepage.css";
import Peoples from "./Peoples";
import { Outlet } from "react-router-dom";

function Welcomepage() {
  return (
    <div className="welcome-container">
      <Peoples />
      <Outlet />
    </div>
  );
}

export default Welcomepage;
