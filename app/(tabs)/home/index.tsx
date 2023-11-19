import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Stack } from 'expo-router';
import type { AppDispatch, RootState } from '@/store';
import { fetchAllFruity } from '@/store/fruitySlice';
import { fruityType } from '@/types';
import FruitsList from '@/components/fruitsList';

export default function Page() {
  const { data, isError, isLoader } = useSelector(
    (state: RootState) => state.fruity,
  );
  const [filteredData, setFilteredData] = useState<fruityType[]>([]);
  const [search, setSearch] = useState<string>('');
  const [timeoutToClear, setTimeoutToClear] = useState<number>(0); // timer for debouncedSearch
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchAllFruits();
  }, []);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  // used to avoid memory leaks
  useEffect(() => {
    return () => {
      clearTimeout(timeoutToClear);
    };
  }, []);
  //
  function fetchAllFruits(): void {
    dispatch(fetchAllFruity());
  }

  // debounce logic
  const debounce = (
    callback: unknown,
    alwaysCall: (text: string) => void,
    ms: number,
  ) => {
    return (...args) => {
      alwaysCall(...args);
      clearTimeout(timeoutToClear);
      setTimeoutToClear(
        setTimeout(() => {
          callback(...args);
        }, ms),
      );
    };
  };

  const changeText = (text: string) => {
    setSearch(text);
  };

  const searchFruits = async (text: string) => {
    setSearch(text);
    const filteredFruits = data.filter((fruit) => {
      return fruit.name.toUpperCase().includes(text.toUpperCase());
    });
    setFilteredData(filteredFruits);
  };

  // here at every changes debounce() first will change search text input value,
  // next clear timeoutToClear stop and reset timeoutToClear who finally call searchFruits after 1s
  const debouncedSearch = debounce(searchFruits, changeText, 1000);
  //

  // logic for main view
  function getComponent() {
    if (data && !isLoader) {
      return (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textInput}
            value={search}
            placeholder="Search by text"
            underlineColorAndroid="transparent"
            onChangeText={debouncedSearch}
            maxLength={12}
          />
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
  textInput: {
    height: 50,
    paddingLeft: 20,
    margin: 5,
    backgroundColor: '#FFF',
    borderWidth: 1,
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
