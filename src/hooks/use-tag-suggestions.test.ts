import { renderHook } from '@testing-library/react';
import useTagSuggestions from './use-tag-suggestions';

describe('useTagSuggestions', () => {
  const tagList = ['liver', 'pain', 'right', 'left', 'brain'];

  it('should return no suggestions when input is empty', () => {
    const { result } = renderHook(() => useTagSuggestions('', tagList));

    expect(result.current.currentSuggestions).toEqual([]);
    expect(result.current.selectedIndex).toBe(0);
  });

  it('should return matching suggestions when input contains a hashtag', () => {
    const { result } = renderHook(() => useTagSuggestions('#pa', tagList));

    expect(result.current.currentSuggestions).toEqual(['pain']);
    expect(result.current.selectedIndex).toBe(0);
  });

  it('should not return suggestions if the tag does not start with the existing tag list', () => {
    const { result } = renderHook(() => useTagSuggestions('#lungs', tagList));

    expect(result.current.currentSuggestions).toEqual([]);
    expect(result.current.selectedIndex).toBe(0);
  });
});
