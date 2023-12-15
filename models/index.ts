export interface Recipe {
  name: string;
  description: string;
  servings: string;
  thumbnail: string;
  duration: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
}

export interface Ingredient {
  name: string;
  unit: string;
  quantity: number;
  display: string;
}

export interface Instruction {
  text: string;
  appliance: string;
  temperature: string;
}
