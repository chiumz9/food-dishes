import { Router } from "express";
import * as controllers from "../controllers/recipe.js";

const router = Router()

router.get("/recipes", controllers.getRecipes)
router.get("/recipes/:id", controllers.getRecipes)
router.post("/recipes", controllers.createRecipes)
router.put("/recipes/:id", controllers.updateRecipes)
router.delete("/recipes/:id", controllers.deleteRecipes)

export default router;
