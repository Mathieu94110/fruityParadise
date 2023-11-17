import { fruityType, favoritesState } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = { favoritesFruitz: [] } as favoritesState;

export const fruitySlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    switchOnFavorites: (state, action: PayloadAction<fruityType>) => {
      const isFavoriteExist = state.favoritesFruitz.some(
        (item: fruityType) => item.id === action.payload.id,
      );
      if (isFavoriteExist) {
        state.favoritesFruitz = state.favoritesFruitz.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        state.favoritesFruitz.push(action.payload);
      }
    },
  },
});
export const { switchOnFavorites } = fruitySlice.actions;
export default fruitySlice.reducer;
