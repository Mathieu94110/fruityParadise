import { fruityType } from '@/types';
import React, { Dispatch, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchInput({
  fruits,
  setFilteredData,
}: {
  fruits: fruityType[];
  setFilteredData: Dispatch<React.SetStateAction<fruityType[]>>;
}) {
  const [search, setSearch] = useState<string>('');
  const [timeoutToClear, setTimeoutToClear] = useState<number>(0); // timer for debouncedSearch
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
    const filteredFruits = fruits.filter((fruit) => {
      return fruit.name.toUpperCase().includes(text.toUpperCase());
    });
    setFilteredData(filteredFruits);
  };

  // here at every changes debounce() first will change search text input value,
  // next clear timeoutToClear stop and reset timeoutToClear who finally call searchFruits after 1s
  const debouncedSearch = debounce(searchFruits, changeText, 1000);
  //
  return (
    <View>
      <TextInput
        style={styles.searchInput}
        value={search}
        placeholder="Search by text"
        aria-label="search-input"
        underlineColorAndroid="transparent"
        onChangeText={debouncedSearch}
        maxLength={12}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  searchInput: {
    height: 50,
    paddingLeft: 20,
    margin: 5,
    backgroundColor: '#FFF',
    borderWidth: 1,
  },
});
