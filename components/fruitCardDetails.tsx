import { fruityType } from '@/types';
import { Image } from 'expo-image';
import { View, Text, StyleSheet } from 'react-native';

export default function FruitCardDetails({
  fruitsDetails,
}: {
  fruitsDetails: fruityType;
}) {
  return (
    <View>
      <Text style={styles.headingText}>{fruitsDetails.name}</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={require('@/assets/images/fruit-test-img.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardRow}>
            <Text style={styles.subHeadingText}>Family</Text>{' '}
            <Text style={styles.fruitsDetailsValue}>
              {fruitsDetails.family}
            </Text>
          </Text>

          <Text style={styles.cardRow}>
            <Text style={styles.subHeadingText}>Order</Text>{' '}
            <Text style={styles.fruitsDetailsValue}>{fruitsDetails.order}</Text>
          </Text>

          <Text style={styles.cardRow}>
            <Text style={styles.subHeadingText}>Genus</Text>{' '}
            <Text style={styles.fruitsDetailsValue}>{fruitsDetails.genus}</Text>
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
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    width: 350,
    height: 400,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
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
    color: '#FF385C',
  },
  nutritionsItemValue: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
