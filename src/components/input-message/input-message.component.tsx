import React, { useState, useRef } from 'react';
import tagList from '../../constants/tag-list';
import useTagSuggestions from '../../hooks/useTagSuggestions';

import {
  MessageContainer,
  CustomMessage,
  CustomTextarea,
  StyledSpan,
} from './input-message.styles';
import TagSuggestions from '../tag-suggestions/tag-suggestions.compoent';

const InputMessage: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { currentSuggestions, selectedIndex, setSelectedIndex } =
    useTagSuggestions(inputText, tagList);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const addTagToInput = (tag: string) => {
    const parts = inputText.split(/(\s+)/);
    const withoutLastTag = parts.slice(0, -1).join('');
    setInputText(`${withoutLastTag}#${tag} `);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex(
        (prevIndex) => (prevIndex + 1) % currentSuggestions.length
      );
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex(
        (prevIndex) =>
          (prevIndex - 1 + currentSuggestions.length) %
          currentSuggestions.length
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentSuggestions.length > 0) {
        addTagToInput(currentSuggestions[selectedIndex]);
      }
    }
  };

  return (
    <MessageContainer onKeyDown={handleKeyDown}>
      <CustomMessage>
        {inputText.split(' ').map((part, index) => {
          const isHashtag = part.startsWith('#');
          const isRecognized = isHashtag && tagList.includes(part.slice(1));
          return (
            <StyledSpan
              isHashtag={isHashtag}
              isRecognized={isRecognized}
              key={index}
            >
              {part}{' '}
            </StyledSpan>
          );
        })}
      </CustomMessage>
      <CustomTextarea
        onChange={handleInputChange}
        value={inputText}
        ref={inputRef}
        placeholder="What’s happening?"
      />

      <TagSuggestions
        suggestions={currentSuggestions}
        selectedIndex={selectedIndex}
        onSelectSuggestions={addTagToInput}
      />
    </MessageContainer>
  );
};

export default InputMessage;
