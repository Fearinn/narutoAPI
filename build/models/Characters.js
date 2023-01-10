import mongoose from "mongoose";
const characterSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
    clan: { type: String },
});
export default characterSchema;
