import React, { useState, useEffect, useRef } from 'react';

import tagList from '../../constants/tag-list';
import { MessageContainer, CustomTextarea } from './input-message.styles';

const InputMessage: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>([]);

  useEffect(() => {
    // Only filter out tags that start with '#' from input and adjust logic to match suggestions without '#'
    const hashtagParts = inputText
      .split(/(\s+)/)
      .filter((t) => t.trim().length > 0 && t.trim().startsWith('#'));
    const lastTag = hashtagParts.pop() || '';
    const tagQuery = lastTag.slice(1); // Remove '#' for matching
    if (tagQuery) {
      const matchedSuggestions = tagList.filter(
        (s) => s.startsWith(tagQuery) && `#${s}` !== lastTag
      );
      setCurrentSuggestions(matchedSuggestions);
      setSelectedIndex(0);
    } else {
      setCurrentSuggestions([]);
    }
  }, [inputText]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const addTagToInput = (tag: string) => {
    // Append '#' when adding a tag from suggestions
    const parts = inputText.split(/(\s+)/);
    const withoutLastTag = parts.slice(0, -1).join('');
    const updatedText = `${withoutLastTag}#${tag} `;
    setInputText(updatedText);
    inputRef.current?.focus();
  };

  return (
    <div style={{ position: 'relative' }}>
      <MessageContainer />
      <CustomTextarea
        onChange={handleInputChange}
        value={inputText}
        ref={inputRef}
        placeholder="What’s happening?"
      />

      {/* tag */}
      {currentSuggestions.length > 0 && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {currentSuggestions.map((suggestion, index) => (
            <li
              key={index}
              style={{
                cursor: 'pointer',
                backgroundColor:
                  selectedIndex === index ? '#eee' : 'transparent',
              }}
              onClick={() => addTagToInput(suggestion)}
            >
              #{suggestion} {/* Display suggestion with '#' prefix */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputMessage;
