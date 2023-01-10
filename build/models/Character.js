import mongoose from "mongoose";
const characterSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    clan: { type: String, required: true },
});
const characters = mongoose.model("characters", characterSchema);
export default characters;
