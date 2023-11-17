import { View } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function FavoritesIcon({
  handleFavorite,
  isFavorite,
}: {
  handleFavorite: () => void;
  isFavorite: boolean;
}) {
  const iconColor = (isOnFavorites: boolean): string => {
    return isOnFavorites ? Colors.primary : Colors.dark;
  };
  return (
    <View>
      <MaterialIcons
        name="star"
        size={24}
        color={iconColor(isFavorite)}
        style={{ width: 40, height: 40 }}
        onPress={() => handleFavorite()}
      />
    </View>
  );
}
