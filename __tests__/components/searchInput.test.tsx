import {
  fireEvent,
  render,
  screen,
  // waitFor,
} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import SearchInput from '@/components/searchInput';
import { fruityType } from '@/types';

describe('searchInput', () => {
  const mockFn = jest.fn();

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
    const utils = render(
      <SearchInput fruits={myList} setFilteredData={mockFn} />,
    );
    const input = screen.getByLabelText('search-input');
    return { input, ...utils };
  };

  it('should render searchInput correctly', () => {
    const rendered = renderer
      .create(<SearchInput fruits={myList} setFilteredData={mockFn} />)
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('should input value be kiwi', () => {
    const { input } = setup();
    fireEvent.changeText(input, 'kiwi');
    expect(input.props.value).toBe('kiwi');
  });
  it('should setFilteredData not to be called yet', () => {
    const { input } = setup();
    fireEvent.changeText(input, 'kiwi');
    expect(mockFn).not.toHaveBeenCalledWith('kiwi');
  });

  // it('should setFilteredData be called after 1s', async () => {
  //   const { input } = setup();
  //   await fireEvent.changeText(input, 'kiwi');
  //   await waitFor(() => {
  //     expect(mockFn).toHaveBeenCalledWith('kiwi'),
  //       {
  //         timeout: 1000,
  //       };
  //   });
  // });
});
