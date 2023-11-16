import { Text, View, StyleSheet, Platform, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { fruityType } from '@/types';

export default function FruityCard(props: fruityType) {
  const { name, id, ...rest } = props;
  return (
    <Link href={`/home/${id}`} asChild>
      <Pressable style={styles.itemContainer}>
        <View>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.tinyLogo}>
          <Image
            source="https://picsum.photos/seed/696/3000/2000"
            contentFit="cover"
          />
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
});
