import { useState, useEffect } from 'react';
import { TagListType } from '../constants/tag-list';

const useTagSuggestions = (inputText: string, tagList: TagListType[]) => {
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const hashtagParts = inputText
      .split(/(\s+)/)
      .filter((t) => t.trim().length > 0 && t.trim().startsWith('#'));
    const lastTag = hashtagParts.pop() || '';
    const tagQuery = lastTag.slice(1); // Remove '#' for matching

    if (tagQuery) {
      const matchedSuggestions = tagList.filter(
        (s) =>
          s.toLowerCase().startsWith(tagQuery.toLowerCase()) &&
          `#${s.toLowerCase()}` !== lastTag
      );
      setCurrentSuggestions(matchedSuggestions);
      setSelectedIndex(0);
    } else {
      setCurrentSuggestions([]);
    }
  }, [inputText, tagList]);

  return { currentSuggestions, selectedIndex, setSelectedIndex };
};

export default useTagSuggestions;
