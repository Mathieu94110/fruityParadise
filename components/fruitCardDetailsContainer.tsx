import FavoritesIcon from '@/components/favoritesIcon';
import FruitCardDetails from '@/components/fruitCardDetails';
import { AppDispatch, RootState } from '@/store';
import { switchOnFavorites } from '@/store/favoritesSlice';
import { fruityType } from '@/types';
import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function FruitCardDetailsContainer({
  fruitsDetails,
}: {
  fruitsDetails: fruityType;
}) {
  const [isOnFavorites, setIsOnFavorites] = useState<boolean>(false);
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesFruitz,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const isOnFavorites = favorites.some(
      (favorite) => favorite.id === fruitsDetails.id,
    );
    if (isOnFavorites) {
      setIsOnFavorites(true);
    } else {
      setIsOnFavorites(false);
    }
  }, [favorites]);

  const toggleFavorite = (): void => {
    dispatch(switchOnFavorites(fruitsDetails));
  };

  return (
    <View style={styles.container}>
      <FavoritesIcon
        handleFavorite={toggleFavorite}
        isFavorite={isOnFavorites}
      />
      <FruitCardDetails fruitsDetails={fruitsDetails} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
