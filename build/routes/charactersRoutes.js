import express from "express";
import CharacterController from "../controller/characterController.js";
const router = express.Router();
router
    .get("/characters", CharacterController.getAllCharacters)
    .get("/characters/:id", CharacterController.getCharacterById)
    .post("/characters", CharacterController.addCharacter)
    .delete("/characters/:id", CharacterController.deleteCharacterById)
    .put("/characters/:id", CharacterController.updateCharacterById);
export default router;
