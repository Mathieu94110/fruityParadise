import FavoritesIcon from '@/components/favoritesIcon';
import FruitCardDetails from '@/components/fruitCardDetails';
import { AppDispatch, RootState } from '@/store';
import { switchOnFavorites } from '@/store/favoritesSlice';
import { fruityType } from '@/types';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function FruitDetails() {
  const [isOnFavorites, setIsOnFavorites] = useState<boolean>(false);
  const fruit = useSelector((state: RootState) => state.fruity.data);
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesFruitz,
  );
  const local = useLocalSearchParams();
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
  }, [favorites, fruit]);

  const fruitsDetails = fruit.find(
    (f: fruityType) => f.id === Number(local.id),
  )!;

  const toggleFavorite = (): void => {
    dispatch(switchOnFavorites(fruitsDetails));
  };

  return fruitsDetails ? (
    <View>
      <Stack.Screen
        options={{
          title: fruitsDetails.name,
        }}
      />
      <View style={styles.container}>
        <FavoritesIcon
          handleFavorite={toggleFavorite}
          isFavorite={isOnFavorites}
        />
        <FruitCardDetails fruitsDetails={fruitsDetails} />
      </View>
    </View>
  ) : (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color="#00ff00" />
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
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
