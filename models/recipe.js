import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Recipe = new Schema({
   _id: {type: Number},
   title: {type: String},
   readyInMinutes: {type: Number},
   servings: {type: Number},
   image: {type: String},
   summary: {type: String},
});

export default mongoose.model("recipe", Recipe)


