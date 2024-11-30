import React, { useState, useEffect, useRef } from 'react';

import tagList from '../../constants/tag-list';
import { MessageContainer, CustomTextarea } from './input-message.styles';

const InputMessage: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <div style={{ position: 'relative' }}>
      <MessageContainer />
      <CustomTextarea
        onChange={handleInputChange}
        value={inputText}
        placeholder="What’s happening?"
      />
    </div>
  );
};

export default InputMessage;
