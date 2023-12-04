const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    recipeID: { type: String, required: true },
    recipe_uri: { type: String, required: true },
    label: { type: String, required: true },
    dietLabels: { type: String, required: true },
    healthLabels: { type: String, required: true },
    mealType: { type: String, require: true },
    ingredientLines: { type: String, required: true},
    Energy: { type: Float32Array, required: false },
    Fat: { type: Float32Array, required: false },
    Carbohydrates: { type: Float32Array, required: false },
    Fiber: { type: Float32Array, required: false },
    image: { type: Float32Array, required: false },
});

const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;