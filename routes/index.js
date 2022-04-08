import { Router } from "express";
import recipeRoutes from "./recipe.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", recipeRoutes);

export default router;
