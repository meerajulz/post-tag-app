import React from 'react';
import { List, ListItem } from './tag-suggestions.styles';
import { TagSuggestionsProps } from '../../types/types';

const TagSuggestions: React.FC<TagSuggestionsProps> = ({
  suggestions,
  selectedIndex,
  onSelectSuggestions,
}) => {
  // Check if there are no suggestions and return null immediately
  if (suggestions.length === 0) {
    return null;
  }
  return (
    <List>
      {suggestions.map((suggestion, index) => (
        <ListItem
          key={index}
          isSelected={index === selectedIndex}
          onClick={() => onSelectSuggestions(suggestion)}
        >
          #{suggestion}
        </ListItem>
      ))}
    </List>
  );
};

export default TagSuggestions;
