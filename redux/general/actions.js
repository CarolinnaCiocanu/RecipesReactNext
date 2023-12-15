import update from "immutability-helper";

export const setRecipes = (state, { data }) => {
  const recipes = [];

  for (const [_, value] of Object.entries(data)) {
    recipes.push(value);
  }

  return update(state, { recipes: { $set: recipes } });
};

export const setActiveRecipe = (state, { data }) => {
  const recipe = data;
  const recipeIngredients = [];

  for (const [_, value] of Object.entries(recipe?.ingredients)) {
    recipeIngredients.push(value);
  }

  recipe.ingredients = recipeIngredients;

  return update(state, { activeRecipe: { $set: data } });
};
