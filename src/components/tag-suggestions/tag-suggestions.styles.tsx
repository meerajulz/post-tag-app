import styled from 'styled-components';
import theme from '../../styles/theme';

export const List = styled.ul`
  list-style-type: none;
  padding: 5px 0;
`;

export const ListItem = styled.li<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) =>
    isSelected ? theme.colors.blue : 'transparent'};
  color: ${({ isSelected }) =>
    isSelected ? theme.colors.selection : theme.colors.black};
  cursor: pointer;
  padding: 5px 10px;
`;
