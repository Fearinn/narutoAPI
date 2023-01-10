import characters from "../models/Character.js";
import { Response, Request } from "express";

class CharacterController {
  static getAllCharacters = (_: Request, response: Response) => {
    characters.find((error, characters) => {
      if (!error) {
        response.status(200).json(characters);
      } else {
        response.status(500).send(error.message);
      }
    });
  };

  /* static getCharacterById = (request: Request, response: Response) => {
    const { id } = request.params;
    characters.findById(id, {}, (error, character) => {
      if (error) {
        response.status(500).send(error.message);
      } else if (!character) {
        response.status(400).send("The character was not found")
      } else {
        response.status(200).send(character);
      }
    });
   } */
  };


export default CharacterController;
