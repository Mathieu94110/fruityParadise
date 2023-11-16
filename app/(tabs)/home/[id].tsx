import FruitCardDetails from '@/components/fruitCardDetails';
import { RootState } from '@/store';
import { fruityType } from '@/types';
import { Image } from 'expo-image';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

export default function FruitDetails() {
  const [fruitsDetails, setFruitDetails] = useState<fruityType | null>(null);
  const fruit = useSelector((state: RootState) => state.fruity.data);
  const local = useLocalSearchParams();

  useEffect(() => {
    const fruitInfo = fruit.find((f: fruityType) => f.id === Number(local.id))!;
    setFruitDetails({
      ...fruitInfo,
    });
  }, []);

  return fruitsDetails ? (
    <View>
      <Stack.Screen
        options={{
          title: fruitsDetails.name,
        }}
      />
      <View style={styles.container}>
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
