import { View, FlatList } from 'react-native';
import React from 'react';
import { fruityType } from '@/types';
import FruityCard from './fruityCard';

export default FruitsList = ({ list }: { list: fruityType[] }) => {
  const ItemSeparatorView = () => {
    return (
      <View
        style={{ backgroundColor: '#c8c8c8', height: 0.5, width: '100%' }}
      ></View>
    );
  };
  return (
    <FlatList
      data={list}
      renderItem={({ item }: { item: fruityType }) => (
        <FruityCard props={item} />
      )}
      keyExtractor={(item: fruityType) => String(item.id)}
      ItemSeparatorComponent={ItemSeparatorView}
    />
  );
};
