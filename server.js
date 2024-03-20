import express from "express";
import dotenv from "dotenv";
import recipeRoutes from "./routes/recipes.routes.js";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();

//Apply middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//Use routes
app.use('/recipes',recipeRoutes);

const PORT= process.env.PORT || 8000

//Make database connection
await mongoose.connect(process.env.MONGO_URI);

app.listen(PORT, () => {
    console.log("Recipe API is running!!!")
});