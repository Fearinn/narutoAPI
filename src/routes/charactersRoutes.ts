import express from "express";
import CharacterController from "../controller/characterController.js";

const router = express.Router();

router
  .get("/characters", CharacterController.getAllCharacters)

export default router;
