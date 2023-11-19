import { render } from '@testing-library/react-native';
import FruitCardDetails from '@/components/fruitCardDetails';
import { fruityType } from '@/types';

describe('favoritesIcon', () => {
  const kiwi: fruityType = {
    name: 'Kiwi',
    id: 123,
    family: 'Actinidizceae',
    order: 'Struthioniformes',
    genus: 'Apteryx',
    nutritions: {
      calories: 61,
      fat: 0.5,
      sugar: 9,
      carbohydrates: 15,
      protein: 1.1,
    },
  };
  const setup = () => {
    const utils = render(<FruitCardDetails fruitsDetails={kiwi} />);
    return { ...utils };
  };

  it('should text kiwi be on screen', () => {
    const { getByText } = setup();
    const name = getByText(/kiwi/i);
    expect(name).toBeOnTheScreen();
  });
  it('should nutritions properties key be visible', () => {
    const { getByText } = setup();
    const nutritionsLeys = [
      getByText('calories'),
      getByText('fat'),
      getByText('sugar'),
      getByText('carbohydrates'),
      getByText('protein'),
    ];
    expect(nutritionsLeys.length).toBe(5);
  });

  it('should image have Kiwi accessibilityLabel', () => {
    const { getByTestId } = setup();
    const image = getByTestId('fruit-details-image');
    expect(image.props.accessibilityLabel).toBe('Kiwi');
  });
});
