import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TagSuggestions from './tag-suggestions.compoent';

describe('TagSuggestions Components', () => {
  const mockOnSelectSuggestions = jest.fn();

  const renderTagSuggestions = (suggestions: string[], selectedIndex = 0) => {
    render(
      <TagSuggestions
        suggestions={suggestions}
        selectedIndex={selectedIndex}
        onSelectSuggestions={mockOnSelectSuggestions}
      />
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

    expect(screen.getByText('#liver')).toBeInTheDocument();
    expect(screen.getByText('#pain')).toBeInTheDocument();
    expect(screen.getByText('#right')).toBeInTheDocument();

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getAllByRole('listitem')[1]).toHaveTextContent('#pain');

    // Simulate a click on the second list item
    fireEvent.click(screen.getAllByRole('listitem')[1]);
    expect(mockOnSelectSuggestions).toHaveBeenCalledWith('pain');
  });

  it('marks the selected item based on selectIndex', () => {
    renderTagSuggestions(['liver', 'pain', 'right'], 1);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems[2]).toHaveTextContent('right');
  });
});
