import styled from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import theme from '../../styles/theme';

export const List = styled.ul`
  list-style-type: none;
  padding: 5px 0;
`;

export const ListItem = styled.li.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'isSelected',
})<{ isSelected: boolean }>`
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.blue : 'transparent'};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.selection : theme.colors.black};
  cursor: pointer;
  padding: 5px 10px;
`;
