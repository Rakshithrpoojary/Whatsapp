import { Router } from "express";
import { MessageCOntroller } from "../Controllers/Message.Controller.js";
import { VerifyJwt } from "../Middlewere/VerifyJwt.js";
import { upload } from "../Middlewere/Multer.middlewere.js";
const Messagerouter = Router();

Messagerouter.post(
  "/messagesent",
  VerifyJwt,
  upload.single("Sendimage"),
  MessageCOntroller
);
export { Messagerouter };
