import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { fruityCardProps } from '@/types';
import FRUITS_IMG from '@/utils/cardCustomDesign';

export default function FruitCard({ tab, name, id }: fruityCardProps) {
  return (
    <Link href={`/${tab}/${id}`} asChild testID="fruit-link">
      <TouchableOpacity>
        <View style={styles.itemContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Image
            style={styles.tinyLogo}
            source={FRUITS_IMG[name]}
            accessibilityLabel={name}
            contentFit="cover"
            testID="fruit-image"
          />
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 16,
    paddingBottom: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 24,
    height: 24,
    borderRadius: 999,
  },
});
