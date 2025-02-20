import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  categoryValue: {
    type: String,
    required: true,
  },
});

export const Category = mongoose.model("Category", categorySchema);
