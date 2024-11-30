import styled from 'styled-components';
import theme from '../../styles/theme';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) =>
    isSelected ? theme.colors.blue : 'transparent'};
  cursor: pointer;
`;
