import { Router } from "express";
import { UserCOntroller } from "../Controllers/User.COntroller.js";
import { upload } from "../Middlewere/Multer.middlewere.js";
import { SigninController } from "../Controllers/Signin.controller.js";
import { VerifyJwt } from "../Middlewere/VerifyJwt.js";
import { Logout } from "../Controllers/Logout.controler.js";
const router = Router();

//Routes
router.post("/register", upload.single("profileimage"), UserCOntroller);
router.post("/signin", SigninController);
router.get("/logout", VerifyJwt, Logout);

export { router };
