import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Stack } from 'expo-router';
import type { AppDispatch, RootState } from '@/store';
import { fetchAllFruity } from '@/store/fruitySlice';
import { fruityType } from '@/types';
import FruitsList from '@/components/fruitsList';
import SearchInput from '@/components/searchInput';

export default function Page() {
  const { data, isError, isLoader } = useSelector(
    (state: RootState) => state.fruity,
  );
  const [filteredData, setFilteredData] = useState<fruityType[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchAllFruits();
  }, []);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  function fetchAllFruits(): void {
    dispatch(fetchAllFruity());
  }

  // logic for main view
  function getComponent() {
    if (data && !isLoader) {
      return (
        <View style={styles.searchContainer}>
          <SearchInput fruits={data} setFilteredData={setFilteredData} />
          {filteredData.length ? (
            <FruitsList list={filteredData} tab="home" />
          ) : (
            <Text style={styles.errorText}>No fruits found</Text>
          )}
        </View>
      );
    }
    if (isError) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Problem occurred while loading data
          </Text>
        </View>
      );
    }
    if (isLoader) {
      return (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Home' }} />
      {getComponent()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flex: 1,
    width: '100%',
  },
  errorContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  errorText: {
    height: '100%',
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#FF385C',
    textAlign: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
