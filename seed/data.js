import db from "../db/connection.js";
import Recipe from "../models/recipe.js";
import recipes from "./recipes.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  db.dropDatabase();

  await Recipe.insertMany(recipes);
  db.close();
};

insertData();
