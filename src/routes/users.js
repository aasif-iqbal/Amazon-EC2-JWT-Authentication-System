import express from "express";
import { signInUser } from "../controllers/userControllers.js";

const route = express.Router();

route.post('/signIn', signInUser);

export default route;