import characters from "../models/Character.js";
class CharacterController {
}
CharacterController.getAllCharacters = (_, response) => {
    characters.find((error, characters) => {
        if (!error) {
            response.status(200).json(characters);
        }
        else {
            response.status(500).send(error.message);
        }
    });
};
;
export default CharacterController;
