import { Text, View, StyleSheet, Platform } from 'react-native';
import { getFamilyDetails } from '@/utils/getFamilyDetails';
import { fruityType } from '@/types';

export default function FruityCard(props: fruityType) {
  const { name, id, family, genus, order, ...rest } = props;
  const { borderColor, emoji } = getFamilyDetails(family);
  return (
    <View style={[styles.card, { borderColor }]}>
      <View style={styles.textcontainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
      <View style={styles.typeContainer}>
        <View style={styles.badge}>
          <Text style={styles.emoji}>Famille: {family}</Text>
          <Text style={styles.typetext}>Genre: {genus}</Text>
          <Text style={styles.typetext}>Ordre: {order}</Text>
        </View>
      </View>
    </View>
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
      ios: {
        shadowOffset: { width: 2, heigth: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
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
  hp: {
    fontSize: 20,
    color: 'purple',
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
  movesContainer: {
    marginBottom: 10,
  },
  movetext: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  weakcontainer: {
    marginBottom: 10,
  },
  weaktext: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
