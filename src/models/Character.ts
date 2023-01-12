import mongoose from "mongoose";

export interface ICharacter {
  name: string;
  clan: string;
  village?: string;
  summary: string;
  level?: "civilian" | "student" | "genin" | "chuunin" | "jounin" | "kage";
}

const characterSchema = new mongoose.Schema<ICharacter>(
  {
    name: { type: String, required: true, index: true },
    clan: { type: String, required: true, index: true },
    summary: { type: String, required: true },
    village: { type: String },
    level: {
      type: String,
      enum: ["civilian", "student", "genin", "chuunin", "jounin", "kage"],
    },
  },
  { collation: { locale: "en_US", strength: 1 } }
);

const characters = mongoose.model<ICharacter>("characters", characterSchema);

export default characters;
