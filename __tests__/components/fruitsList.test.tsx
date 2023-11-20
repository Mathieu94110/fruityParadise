import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import FruitsList from '@/components/fruitsList';
import { fruityType } from '@/types';

describe('fruitsList', () => {
  const myList: fruityType[] = [
    {
      name: 'Persimmon',
      id: 52,
      family: 'Ebenaceae',
      order: 'Rosales',
      genus: 'Diospyros',
      nutritions: {
        calories: 81,
        fat: 0,
        sugar: 18,
        carbohydrates: 18,
        protein: 0,
      },
    },
    {
      name: 'Strawberry',
      id: 3,
      family: 'Rosaceae',
      order: 'Rosales',
      genus: 'Fragaria',
      nutritions: {
        calories: 29,
        fat: 0.4,
        sugar: 5.4,
        carbohydrates: 5.5,
        protein: 0.8,
      },
    },
    {
      name: 'Banana',
      id: 1,
      family: 'Musaceae',
      order: 'Zingiberales',
      genus: 'Musa',
      nutritions: {
        calories: 96,
        fat: 0.2,
        sugar: 17.2,
        carbohydrates: 22,
        protein: 1,
      },
    },
  ];

  const setup = () => {
    const utils = render(<FruitsList list={myList} tab="home" />);
    return { ...utils };
  };

  it('should render fruitsList correctly', () => {
    const rendered = renderer
      .create(<FruitsList list={myList} tab="home" />)
      .toJSON();
    expect(rendered).toBeTruthy();
  });
  it('should list exist and having 3 childs with the right properties', () => {
    const { getByTestId } = setup();
    expect(getByTestId('flatlist')).toBeDefined();
    const elementProps = getByTestId('flatlist').props.data;
    expect(elementProps.length).toBe(3);
    expect(elementProps).toEqual(myList);
  });

  it('should Strawberry be on the screen', () => {
    const { getByText } = setup();
    expect(getByText('Strawberry')).toBeOnTheScreen();
  });
});
