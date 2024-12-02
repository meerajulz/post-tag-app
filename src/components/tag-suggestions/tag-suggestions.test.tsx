import { render, screen, fireEvent } from '@testing-library/react';
import TagSuggestions from './tag-suggestions.component';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { ListItem } from './tag-suggestions.styles';

describe('TagSuggestions Components', () => {
  const mockOnSelectSuggestions = jest.fn();

  const renderTagSuggestions = (suggestions: string[], selectedIndex = 0) => {
    render(
      <ThemeProvider theme={theme}>
        <TagSuggestions
          suggestions={suggestions}
          selectedIndex={selectedIndex}
          onSelectSuggestions={mockOnSelectSuggestions}
        />
      </ThemeProvider>
    );
  };

  beforeEach(() => {
    mockOnSelectSuggestions.mockClear();
  });

  it('does not render when there are no suggestions', () => {
    renderTagSuggestions([]);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('renders suggestions correctly and can select an item', () => {
    renderTagSuggestions(['liver', 'pain', 'right']);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
    fireEvent.click(items[1]);
    expect(mockOnSelectSuggestions).toHaveBeenCalledWith('pain');
  });

  it('correctly applies styles based on selection', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ListItem isSelected={true}>Selected Item</ListItem>
        <ListItem isSelected={false}>Unselected Item</ListItem>
      </ThemeProvider>
    );

    expect(getByText('Selected Item')).toHaveStyle(`
      background-color: ${theme.colors.blue};
      color: ${theme.colors.selection};
    `);
  });
});
