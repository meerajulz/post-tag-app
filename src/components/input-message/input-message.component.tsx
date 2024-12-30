import React, { useState, useRef } from 'react';
import tagList from '../../constants/tag-list';
import useTagSuggestions from '../../hooks/use-tag-suggestions';

import {
  MessageContainer,
  CustomMessage,
  CustomTextarea,
} from './input-message.styles';
import TagSuggestions from '../tag-suggestions/tag-suggestions.component';

const InputMessage: React.FC = () => {
  //which stores the current value of the textarea where the user inputs text.
  const [inputText, setInputText] = useState<string>('');
  //to the textarea element, which allows for direct manipulation of the element
  const inputRef = useRef<HTMLTextAreaElement>(null);

  //custom hook to get tags
  const { currentSuggestions, selectedIndex, setSelectedIndex } =
    useTagSuggestions(inputText, tagList);

  //updates the inputText state whenever the user types in the textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  //append a tag to the existing input text when
  //a user selects a tag from the suggestions
  const addTagToInput = (tag: string) => {
    const parts = inputText.split(/(\s+)/);
    const withoutLastTag = parts.slice(0, -1).join('');
    setInputText(`${withoutLastTag}#${tag} `);
    inputRef.current?.focus();
  };

  //to handle keyboard events to
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
    //MessageContainer that listens for the onKeyDown event.
    //inputText split in 2 and display tags and text
    //depends is is come from a list or user added change css
    //CustomTextarea is hided so we can use style in the div

    //TagSuggestions display the current tag suggestions and allow the user to select one.

    <MessageContainer onKeyDown={handleKeyDown} data-testid="message-container">
      <CustomMessage>
        {inputText.split(' ').map((part, index) => {
          const isHashtag = part.startsWith('#');
          const isRecognized = isHashtag && tagList.includes(part.slice(1));
          const spanStyle = {
            color: isHashtag
              ? isRecognized
                ? '#1da1f2'
                : '#4EB840'
              : 'inherit',
          };

          return (
            <span style={spanStyle} key={index}>
              {part}{' '}
            </span>
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
