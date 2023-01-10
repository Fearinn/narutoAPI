import mongoose, {ObjectId} from "mongoose";

export interface ICharacter {
  id: ObjectId
  name: string,
  clan: string
}

const characterSchema = new mongoose.Schema<ICharacter>({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  clan: { type: String, required: true},
});

const characters = mongoose.model<ICharacter>("characters", characterSchema);

export default characters;
