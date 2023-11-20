import FruitCard from '@/components/fruitCard';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
describe('fruitCard', () => {
  const setup = () => {
    const utils = render(<FruitCard name="Kiwi" id={123} tab={'home'} />);
    return { ...utils };
  };

  it('should render fruitCard correctly', () => {
    const rendered = renderer
      .create(<FruitCard name="Kiwi" id={123} tab={'home'} />)
      .toJSON();
    expect(rendered).toBeTruthy();
  });
  it('should fruit link not to be null', () => {
    const { queryByTestId } = setup();
    expect(queryByTestId('fruit-link')).not.toBeNull();
  });

  it('should display fruit name', () => {
    const { getByText } = setup();
    expect(getByText('Kiwi')).toBeOnTheScreen();
  });
});
