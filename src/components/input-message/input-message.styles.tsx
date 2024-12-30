import styled from 'styled-components';

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
  color: ${({ theme }) => theme.colors.black};
  pointer-events: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  padding: 8px;
  font-size: ${({ theme }) => theme.fontSize};
  line-height: ${({ theme }) => theme.lineHeight};
  font-family: ${({ theme }) => theme.fontFamily};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
`;

export const CustomTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 9px;
  font-size: ${({ theme }) => theme.fontSize};
  line-height: ${({ theme }) => theme.lineHeight};
  font-family: ${({ theme }) => theme.fontFamily};
  border: 0;
  resize: none;
  color: ${({ theme }) => theme.colors.border};
  font-weight: ${({ theme }) => theme.fontWeight};

  :focus-visible {
    outline: -webkit-focus-ring-color auto 0;
  }
`;
