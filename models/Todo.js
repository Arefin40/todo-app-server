import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
      },
      completed: {
         type: Boolean,
         default: false,
      },
   },
   { versionKey: false, timestamps: true, autoIndex: true }
);

export default mongoose.model("Todo", TodoSchema);
