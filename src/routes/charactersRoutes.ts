import express from "express";
import CharacterController from "../controller/characterController.js";

const router = express.Router();

router
  .get("/characters", CharacterController.getAll)
  .get("/characters/:id", CharacterController.getById)
  .post("/characters", CharacterController.add)
  .delete("/characters/:id", CharacterController.deleteById)
  .put("/characters/:id", CharacterController.updateById)

export default router;
