import Recipe from "../models/recipe.js";

export const getRecipes = async (request, response) => {
   try{
      const recipes = await Recipe.find()
      response.json(recipes)
   } catch (error) {
      console.log(error)
      response.status(500).json({error: error.message})
   }
};
export const createRecipes = async (request, response) => {
   try{
      const recipes = new Recipe(request, response)
      await recipe.save()
      response.status(201)
   } catch (error) {
      console.log(error)
      response.status(500).json({error: error.message})
   }
};
export const updateRecipes = async (request, response) => {
   const { id } = request.params
   const recipe = await Recipe.findByIdAndUpdate(id, request.body)
   response.status(200).json({error: error.message})
};
export const deleteRecipes = async (request, response) => {
   try{
      const { id } = request.params
      const deleted = await recipes.findByIdAndDelete(id)

      if (deleted) {
         return response.status(200).send("Recipe deleted!")
      }

      throw new Error("Recipe not found")
   } catch (error) {
      console.log(error)
      response.status(500).json({ error: error.message })
   }
}
