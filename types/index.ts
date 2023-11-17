type nutritionsType = {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
};
export type fruityType = {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: nutritionsType;
};

export type fruityState = {
  data: fruityType[];
  isLoader: boolean;
  isError: boolean;
};
export type favoritesState = {
  favoritesFruitz: fruityType[];
};
