import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Stack } from 'expo-router';
import type { RootState } from '@/store';
import FruitsList from '@/components/fruitsList';

export default function Page() {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesFruitz,
  );
  function getComponent() {
    if (favorites.length) {
      return (
        <View>
          <FruitsList list={favorites} />
        </View>
      );
    } else {
      return (
        <View style={styles.textContainer}>
          <Text style={styles.noFavoritesText}>
            You have no favorites saved
          </Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Favorites' }} />
      {getComponent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFavoritesText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF385C',
  },
});
