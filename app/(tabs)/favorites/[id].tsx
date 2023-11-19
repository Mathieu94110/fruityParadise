import FruitCardDetailsContainer from '@/components/fruitCardDetailsContainer';
import { RootState } from '@/store';
import { fruityType } from '@/types';
import { Stack, useLocalSearchParams } from 'expo-router';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

export default function FavoritesFruitDetails() {
  const fruit = useSelector((state: RootState) => state.fruity.data);
  const local = useLocalSearchParams();

  const fruitsDetails = fruit.find(
    (f: fruityType) => f.id === Number(local.id),
  )!;

  return fruitsDetails ? (
    <View>
      <Stack.Screen
        options={{
          title: fruitsDetails.name,
        }}
      />
      <FruitCardDetailsContainer fruitsDetails={fruitsDetails} />
    </View>
  ) : (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
}

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
