import { fruityType } from '@/types';
import { Image } from 'expo-image';
import { View, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { FRUITS_IMG } from '@/utils/cardCustomDesign';

export default function FruitCardDetails({
  fruitsDetails,
}: {
  fruitsDetails: fruityType;
}) {
  const cardDetailsWidth = Dimensions.get('window').width * 0.9;

  return (
    <View style={styles.container}>
      <View style={{ width: cardDetailsWidth }}>
        <Text style={styles.headingText}>{fruitsDetails.name}</Text>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={FRUITS_IMG[fruitsDetails.name]}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardRow}>
              <Text style={styles.subHeadingText}>Family</Text>
              {'  '}
              <Text style={styles.fruitsDetailsValue}>
                {fruitsDetails.family}
              </Text>
            </Text>

            <Text style={styles.cardRow}>
              <Text style={styles.subHeadingText}>Order</Text>
              {'  '}
              <Text style={styles.fruitsDetailsValue}>
                {fruitsDetails.order}
              </Text>
            </Text>

            <Text style={styles.cardRow}>
              <Text style={styles.subHeadingText}>Genus</Text>
              {'  '}
              <Text style={styles.fruitsDetailsValue}>
                {fruitsDetails.genus}
              </Text>
            </Text>
            <Text style={styles.nutritionsHeading}>Nutritions</Text>
            <Text style={styles.cardNutritions}>
              {Object.entries(fruitsDetails.nutritions).map(([key, value]) => (
                <View style={styles.nutritionsItem} key={key}>
                  <Text style={styles.nutritionsItemKey}>{key}</Text>
                  <Text style={styles.nutritionsItemValue}>{value}g</Text>
                </View>
              ))}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 'auto',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    height: 420,
    borderRadius: 6,
    marginVertical: 12,
  },
  cardElevated: {
    backgroundColor: '#FFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardRow: {
    display: 'flex',
    width: '100%',
  },
  subHeadingText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  fruitsDetailsValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF385C',
  },
  nutritionsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardNutritions: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
    padding: 4,
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'dashed',
    width: '100%',
    justifyContent: 'space-between',
  },
  nutritionsItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  nutritionsItemKey: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nutritionsItemValue: {
    paddingLeft: 10,
    paddingRight: 10,
    color: '#FF385C',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
