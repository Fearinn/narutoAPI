import characters, { ICharacter } from "../models/Character.js";
import { Response, Request } from "express";

class CharacterController {
  static getAll = (_: Request, response: Response) => {
    characters.find((error, characters) => {
      if (error) {
        response.status(500).send(error.message);
      } else {
        response.status(200).json(characters);
      }
    });
  };

  static getById = (request: Request, response: Response) => {
    const { id } = request.params;
    characters.findById(id, {}, (error, character) => {
      if (error) {
        response
          .status(500)
          .send(`[The id is possibly invalid] ${error.message}`);
      } else if (!character) {
        response.status(404).send("The character was not found");
      } else {
        response.status(200).send(character);
      }
    });
  };

  static add = (request: Request, response: Response) => {
    const newCharacter = new characters<ICharacter>(request.body);
    newCharacter.save((error) => {
      if (error) {
        response
          .status(500)
          .send(`[The id is possibly invalid] ${error.message}`);
      } else {
        response.status(200).send("Character successfully saved!");
      }
    });
  };

  static deleteById = (request: Request, response: Response) => {
    const { id } = request.params;
    characters.findByIdAndDelete(id, {}, (error, character) => {
      if (error) {
        response
          .status(500)
          .send(`[The id is possibly invalid] ${error.message}`);
      } else if (!character) {
        response.status(404).send("The character was not found");
      } else {
        response.status(200).send("Character successfully deleted!");
      }
    });
  };

  static updateById = (request: Request, response: Response) => {
    const { id } = request.params;
    characters.findByIdAndUpdate(
      id,
      { $set: request.body },
      {},
      (error, character) => {
        if (error) {
          response
            .status(500)
            .send(`[The id is possibly invalid] ${error.message}`);
        } else if (!character) {
          response.status(404).send("The character was not found");
        } else {
          response.status(200).send("Character successfully updated!");
        }
      }
    );
  };
}

export default CharacterController;
