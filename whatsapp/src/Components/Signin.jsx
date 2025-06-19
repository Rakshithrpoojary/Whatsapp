import React from "react";
import "../Styles/Signin.css";
import { motion } from "framer-motion";
import UseLogin from "../Customhooks/UseLogin";
import { useState } from "react";

function Signin() {
  const [logindata, setLogindata] = useState({ username: "", password: "" });
  const { signin } = UseLogin();
  return (
    <motion.div className="signinfull-container">
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="signin-container"
      >
        <form
          onSubmit={(e) => signin(e, logindata)}
          className="inner-container"
        >
          <p className="textb">Username</p>
          <input
            value={logindata.username}
            onChange={(e) =>
              setLogindata((set) => ({ ...set, username: e.target.value }))
            }
            placeholder="Enter your username"
            type="text"
            className="signin-username"
          />
          <p className="textb">Password</p>
          <input
            onChange={(e) =>
              setLogindata((set) => ({ ...set, password: e.target.value }))
            }
            value={logindata.password}
            placeholder="Enter your password"
            type="password"
            className="signin-password"
          />
          <button type="submit" className="signin-button">
            Signin
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Signin;
