import { Router } from "express";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from "../controllers/recipes.controller.js";
import multer from "multer";

//Configure upload middleware
const upload = multer({dest: 'uploads/images'});

//create recipes router
const router = Router();

//Define routes
router.post('/', upload.single('image'), addRecipe);

router.get('', getRecipes );

router.get('/:id', getRecipe );

router.patch('/:id', updateRecipe );

router.delete('/:id', deleteRecipe)

export default router;



