import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res, next) => {
  try {
    //Add recipe to the database
    const createResult = await RecipeModel.create(req.body);
    //return response
    res.send(createResult);
  } catch (error) {
    //Forward to express error handler
    next(error);
  }
};

export const getRecipes = async (req, res, next) => {
  try {
     //Add recipe to the database
     const findRecipes= await RecipeModel.find();
      //return response
    res.send(findRecipes);
  } catch (error) {
    //Forward to express error handler
    next(error)
  }
};

export const getRecipe = async (req, res, next) => {
  try {
    const getOneRecipe= await RecipeModel.findById(req.params.id)
    //Return 404 if recipe not found
    if (findIdResult === null) {
     return res.status(404).json({
        message: `Recipe with ObjestId: ${req.params.id} Not Found`
      })
    }
    //Return response
    res.status(200).json(getOneRecipe);
  } catch (error) {
    next(error)
  }
};

export const updateRecipe = (req, res) => {
  res.send("Update single recipe");
};

export const deleteRecipe = (req, res) => {
  res.send("Delete single recipe");
};
