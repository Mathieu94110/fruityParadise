import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Stack } from 'expo-router';
import type { AppDispatch, RootState } from '@/store';
import { fetchAllFruity } from '@/store/fruitySlice';
import { fruityType } from '@/types';
import FruityCard from '@/components/fruityCard';

export default function Page() {
  const { data, isError } = useSelector((state: RootState) => state.fruity);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchAllFruits();
  }, []);

  async function fetchAllFruits(): Promise<void> {
    dispatch(fetchAllFruity());
  }

  function getComponent() {
    if (data.length) {
      return (
        <FlatList
          data={data}
          renderItem={({ item }: { item: fruityType }) => (
            <FruityCard props={item} />
          )}
          keyExtractor={(item: fruityType) => String(item.id)}
        />
      );
    }
    if (isError) {
      return <Text>Problem occurred while loading data</Text>;
    }
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Fruits list' }} />
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
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
