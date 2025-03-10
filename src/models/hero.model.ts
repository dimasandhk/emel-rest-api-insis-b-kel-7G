import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String, required: true }],
    image: { type: String, required: true }
  },
  { _id: false }
);

const heroSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    skills: [skillSchema],
    tags: [{ type: String, required: true }]
  },
  { timestamps: true }
);

const Hero = mongoose.model("Hero", heroSchema);
export { Hero };
