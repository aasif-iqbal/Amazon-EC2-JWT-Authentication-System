import express from "express";
import { loginUser, registration } from "../controllers/userControllers.js";

const route = express.Router();

route.post('/registration', registration);

route.post('/login', loginUser);

export default route;