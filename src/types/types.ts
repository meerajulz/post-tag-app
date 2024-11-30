export interface StyledSpanProps {
  isHashtag: boolean;
}

export interface TagSuggestionsProps {
  suggestions: string[];
  selectedIndex: number;
  onSelectSuggestions: (suggestions: string) => void;
}
