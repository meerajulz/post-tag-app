import { ThemeProvider } from 'styled-components';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { theme } from '../../styles/theme';

import InputMessage from './input-message.component';

// Mock tagList to control the testing environment
jest.mock('../../constants/tag-list', () => ['liver', 'pain', 'right']);

describe('CustomMessage in TextInput', () => {
  const inputText = 'This is a #liver and this is not a hashtag #example';

  const setup = (inputValue = '') => {
    render(
      <ThemeProvider theme={theme}>
        <InputMessage />
      </ThemeProvider>
    );
    const textArea = screen.getByPlaceholderText(
      'What’s happening?'
    ) as HTMLTextAreaElement;
    if (inputValue) {
      fireEvent.change(textArea, { target: { value: inputValue } });
    }
    return textArea;
  };

  it('renders text and hashtags correctly', () => {
    const textArea = setup(inputText);
    expect(textArea).toBeInTheDocument();
    expect(screen.getByText('#liver')).toBeInTheDocument();

    fireEvent.change(textArea, { target: { value: inputText } });
    expect(screen.getByText('#liver')).toBeInTheDocument();
  });

  it('does not show suggestions when there are no hashtags', () => {
    setup('Hello world');
    expect(screen.queryByText('TagSuggestions')).toBeNull();

    const textArea = screen.getByPlaceholderText('What’s happening?');
    fireEvent.change(textArea, { target: { value: 'Hello world' } });

    expect(screen.queryByText('TagSuggestions')).toBeNull();
  });

  it('styles hashtags correctly based on whether they are recognized', async () => {
    setup('This is a #liver and this is not a hashtag #example');

    const textArea = screen.getByPlaceholderText('What’s happening?');
    fireEvent.change(textArea, { target: { value: inputText } });

    // Check the style of recognized and unrecognized hashtags
    await waitFor(() => {
      const recognizedHashtag = screen.getByText('#liver');
      const unrecognizedHashtag = screen.getByText('#example');
      expect(recognizedHashtag).toHaveStyle('color: #1da1f2'); // Blue for recognized
      expect(unrecognizedHashtag).toHaveStyle('color: #4EB840'); // Green for unrecognized
    });
  });

  it('handles keyboard navigation and selection correctly', () => {
    const textArea = setup('#pa');

    // Simulate key down to select the first suggestion
    fireEvent.keyDown(textArea, { key: 'ArrowDown' });
    fireEvent.keyDown(textArea, { key: 'Enter' });

    // Check if the input text was updated correctly
    expect(textArea.value).toContain('#pain '); // Assumes 'pain' is the first in the list of suggestions
  });

  it('does not show suggestions when there are no hashtags', () => {
    setup('Hello world');

    const textArea = screen.getByPlaceholderText('What’s happening?');
    fireEvent.change(textArea, { target: { value: 'Hello world' } });

    expect(screen.queryByText('TagSuggestions')).toBeNull();
  });
});
