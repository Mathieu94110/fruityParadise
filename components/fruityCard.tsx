import {
  Text,
  View,
  StyleSheet,
  // Image,
  Platform,
  Pressable,
} from 'react-native';
import { Link } from 'expo-router';
import { getFamilyDesign, getFruitImg } from '@/utils/cardCustomDesign';
import { fruityType } from '@/types';

export default function FruityCard(props: fruityType) {
  const { name, id, family, genus, order, ...rest } = props;
  const { borderColor, emoji } = getFamilyDesign(family);
  return (
    <Link href={`/home/${id}`} asChild>
      <Pressable>
        <View style={[styles.card, { borderColor }]}>
          <View style={styles.textcontainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.emoji}>{emoji}</Text>
          </View>
          {/* <Image
        style={styles.image}
        source={{ uri: getFruitImg[name].image }}
        accessibilityLabel={`${name} pokeman`}
        resizeMode="contain"
      /> */}
          <View style={styles.typeContainer}>
            <View style={styles.badge}>
              <Text style={styles.emoji}>Famille: {family}</Text>
              <Text style={styles.typetext}>Genre: {genus}</Text>
              <Text style={styles.typetext}>Ordre: {order}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 3,
    margin: 16,
    padding: 16,
    ...Platform.select({
      android: {
        elevation: 5,
      },
    }),
  },
  textcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'blue',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  typeContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 30,
    marginRight: 20,
  },
  badge: {
    flexDirection: 'column',
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'flex-start',
  },
  typetext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
