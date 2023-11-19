import FruitCard from '@/components/fruitCard';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-dom';
describe('fruitCard', () => {
  const setup = () => {
    const utils = render(<FruitCard name="Kiwi" id={123} tab={'home'} />);
    return { ...utils };
  };
  it('should fruit link not to be null', () => {
    const { queryByTestId } = setup();
    expect(queryByTestId('fruit-link')).not.toBeNull();
  });

  it('should display fruit name', () => {
    const { getByText } = setup();
    expect(getByText('Kiwi')).toBeOnTheScreen();
  });
});
