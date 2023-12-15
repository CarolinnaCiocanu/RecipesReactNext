import { types } from "./action-types";
import * as action from "./actions";
import { HYDRATE } from "next-redux-wrapper";

const initialStates = {
  recipes: [],
};

let hidratate = false;

export const GeneralReducer = (state = initialStates, result) => {
  const { type, payload } = result;

  switch (type) {
    case HYDRATE: {
      if (hidratate) return state;

      hidratate = true;

      return { ...initialStates, ...payload.GeneralReducer };
    }

    case types.SET_RECIPES:
      return action.setRecipes(state, payload);
    case types.SET_ACTIVE_RECIPE:
      return action.setActiveRecipe(state, payload);
    default:
      return state;
  }
};

export default GeneralReducer;
