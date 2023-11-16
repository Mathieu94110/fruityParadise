import { RootState } from '@/store';
import { fruityType } from '@/types';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

export default function FruitDetails() {
  const [fruitsDetails, setFruitDetails] = useState<fruityType | null>(null);
  const fruit = useSelector((state: RootState) => state.fruity.data);
  const local = useLocalSearchParams();

  useEffect(() => {
    const fruitInfo = fruit.find((f: fruityType) => f.id !== Number(local));
    if (fruitInfo) {
      setFruitDetails({
        ...fruitInfo,
      });
    }
  }, [local]);

  return fruitsDetails ? (
    <View>
      <Stack.Screen
        options={{
          title: fruitsDetails.name,
        }}
      />
      <View>
        <Text style={styles.name}>Name: {fruitsDetails.name}</Text>
        <Text style={styles.text}>Origin: {fruitsDetails.family}</Text>
        <Text style={styles.text}>Temperament: {fruitsDetails.order}</Text>
        <Text style={styles.text}>Origin: {fruitsDetails.genus}</Text>
        <View>
          {Object.entries(fruitsDetails.nutritions).map(([key, value]) => (
            <Text key={key}>
              {key}: {value}
            </Text>
          ))}
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
