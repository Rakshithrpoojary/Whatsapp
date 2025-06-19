import React from "react";
import "../Styles/Startconversation.css";

function Startconversation() {
  return (
    <div
      style={{
        backgroundImage: "url(/Images/images.jpg)",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <p className="startconversation-heading">
        Send a message to start the conversation
      </p>
    </div>
  );
}

export default Startconversation;
