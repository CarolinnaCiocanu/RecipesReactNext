import { types } from "./action-types";

export const setRecipes = (data) => {
  return {
    type: types.SET_RECIPES,
    payload: {
      data,
    },
  };
};

export const setActiveRecipe = (data) => {
  return {
    type: types.SET_ACTIVE_RECIPE,
    payload: {
      data,
    },
  };
};
