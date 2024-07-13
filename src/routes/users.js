import express from "express";
import { loginUser, signInUser } from "../controllers/userControllers.js";

const route = express.Router();

route.post('/signIn', signInUser);

route.post('/login', loginUser);

export default route;