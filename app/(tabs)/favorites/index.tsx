import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Stack } from 'expo-router';
import type { RootState } from '@/store';
import { fruityType } from '@/types';
import FruityCard from '@/components/fruityCard';

export default function Page() {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesFruitz,
  );
  function getComponent() {
    if (favorites.length) {
      return (
        <FlatList
          data={favorites}
          renderItem={({ item }: { item: fruityType }) => (
            <FruityCard props={item} />
          )}
          keyExtractor={(item: fruityType) => String(item.id)}
        />
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
