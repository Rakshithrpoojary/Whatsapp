import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import { Connectdb } from "../src/db/index.js";
import { server, app } from "../src/Socket/Socket.js";
import { Errormiddlewer } from "../src/Middlewere/Errormiddlewere.js";
import { router } from "./Routes/Signinsignup.routes.js";
import { Messagerouter } from "../src/Routes/Message.Routes.js";

dotenv.config({ path: "./.env" });
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use("/api/v1/user", router);
app.use("/api/v1/message", Messagerouter);
app.use(Errormiddlewer);
async function Mongodb() {
  try {
    await Connectdb();
    server.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
Mongodb();
