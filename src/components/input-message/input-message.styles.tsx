import styled from 'styled-components';
import { StyledSpanProps } from '../../types/types';

export const StyledSpan = styled.span<StyledSpanProps>`
  color: ${({ isHashtag }) => (isHashtag ? '#1da1f2' : 'inherit')};
`;

export const MessageContainer = styled.div`
  position: relative;
`;

export const CustomMessage = styled.div`
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
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const CustomTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 9px;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Arial', sans-serif;
  border: 0;
  resize: none;
  color: #ccc;
  font-weight: lighter;
  :focus-visible {
    outline: -webkit-focus-ring-color auto 0;
  }
`;
