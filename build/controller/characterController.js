import characters from "../models/Character.js";
class CharacterController {
}
CharacterController.getAllCharacters = (_, response) => {
    characters.find((error, characters) => {
        if (error) {
            response.status(500).send(error.message);
        }
        else {
            response.status(200).json(characters);
        }
    });
};
CharacterController.getCharacterById = (request, response) => {
    const { id } = request.params;
    characters.findById(id, {}, (error, character) => {
        if (error) {
            response
                .status(500)
                .send(`[The id is possibly invalid] ${error.message}`);
        }
        else if (!character) {
            response.status(404).send("The character was not found");
        }
        else {
            response.status(200).send(character);
        }
    });
};
CharacterController.addCharacter = (request, response) => {
    const newCharacter = new characters(request.body);
    newCharacter.save((error) => {
        if (error) {
            response
                .status(500)
                .send(`[The id is possibly invalid] ${error.message}`);
        }
        else {
            response.status(200).send("Character successfully saved!");
        }
    });
};
CharacterController.deleteCharacterById = (request, response) => {
    const { id } = request.params;
    characters.findByIdAndDelete(id, {}, (error, character) => {
        if (error) {
            response
                .status(500)
                .send(`[The id is possibly invalid] ${error.message}`);
        }
        else if (!character) {
            response.status(404).send("The character was not found");
        }
        else {
            response.status(200).send("Character successfully deleted!");
        }
    });
};
CharacterController.updateCharacterById = (request, response) => {
    const { id } = request.params;
    characters.findByIdAndUpdate(id, { $set: request.body }, {}, (error, character) => {
        if (error) {
            response
                .status(500)
                .send(`[The id is possibly invalid] ${error.message}`);
        }
        else if (!character) {
            response.status(404).send("The character was not found");
        }
        else {
            response.status(200).send("Character successfully updated!");
        }
    });
};
export default CharacterController;
