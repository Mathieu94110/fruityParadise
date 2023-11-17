import { render, screen, fireEvent } from '@testing-library/react-native';
import FavoritesIcon from '../../components/favoritesIcon';

describe('favoritesIcon', () => {
  const mockFn = jest.fn();
  it('render correctly', () => {
    const tree = render(
      <FavoritesIcon isFavorite={false} handleFavorite={mockFn} />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should having by default #FF385C color', () => {
    render(<FavoritesIcon isFavorite={true} handleFavorite={mockFn} />);
    const starIcon = screen.getByTestId('star-icon');
    expect(starIcon).toHaveStyle({ color: '#FF385C' });
  });

  it('should on icon click handleFavorite have been called and icon now having #1A1A1A color', () => {
    const { getByTestId } = render(
      <FavoritesIcon isFavorite={false} handleFavorite={mockFn} />,
    );
    const starIcon = getByTestId('star-icon');
    fireEvent.press(starIcon);
    expect(mockFn).toHaveBeenCalled();
    expect(starIcon).toHaveStyle({ color: '#1A1A1A' });
  });
});
