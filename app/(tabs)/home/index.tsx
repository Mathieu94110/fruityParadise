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
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchAllFruits();
  }, []);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  async function fetchAllFruits(): Promise<void> {
    dispatch(fetchAllFruity());
  }

  function searchFilter(text: string) {
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(data);
      setSearch(text);
    }
  }

  function getComponent() {
    if (data && !isLoader) {
      return (
        <View style={{ flex: 1, width: '100%' }}>
          <TextInput
            style={styles.textInput}
            value={search}
            placeholder="Search"
            underlineColorAndroid="transparent"
            onChangeText={(text) => searchFilter(text)}
          />
          {filteredData.length ? (
            <FruitsList list={filteredData} />
          ) : (
            <Text style={styles.errorText}>No fruits found</Text>
          )}
        </View>
      );
    }
    if (isError) {
      return (
        <View style={styles.textContainer}>
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
  textContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
