import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import type { AppDispatch, RootState } from '@/store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllFruity } from '@/store/fruitySlice';
import { fruityType } from '@/types';
import FruityCard from '@/components/fruityCard';

const Page = () => {
  const { data, isError } = useSelector((state: RootState) => state.fruity);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchAllFruits();
  }, []);

  async function fetchAllFruits(): Promise<void> {
    dispatch(fetchAllFruity());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des fruits</Text>
      <View style={{ marginVertical: 40 }}>
        {data.length ? (
          <FlatList
            data={data}
            renderItem={({ item }: { item: fruityType }) => (
              <FruityCard {...item} />
            )}
            keyExtractor={(item: fruityType) => String(item.id)}
          />
        ) : isError ? (
          <Text>Problème survenu lors du chargements des données</Text>
        ) : (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Page;
