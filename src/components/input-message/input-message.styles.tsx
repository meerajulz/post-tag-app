import styled from 'styled-components';

// Styled component for the message container
export const MessageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  color: #070707;
  pointer-events: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  padding: 8px;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Arial', sans-serif;
`;

// Styled component for the custom textarea
export const CustomTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 8px;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Arial', sans-serif;
  border: 0;
  resize: none;
`;
