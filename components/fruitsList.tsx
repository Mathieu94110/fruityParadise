import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { fruityType } from '@/types';
import FruitCard from './fruitCard';

export default function FruitsList({
  list,
  tab,
}: {
  list: fruityType[];
  tab: 'home' | 'favorites';
}) {
  const ItemSeparatorView = () => {
    return <View style={styles.itemSeparator}></View>;
  };
  return (
    <FlatList
      data={list}
      testID="flatlist"
      renderItem={({ item }: { item: fruityType }) => (
        <FruitCard id={item.id} name={item.name} tab={tab} />
      )}
      keyExtractor={(item: fruityType) => String(item.id)}
      ItemSeparatorComponent={ItemSeparatorView}
    />
  );
}
const styles = StyleSheet.create({
  itemSeparator: {
    backgroundColor: '#c8c8c8',
    height: 0.5,
    width: '100%',
  },
});
