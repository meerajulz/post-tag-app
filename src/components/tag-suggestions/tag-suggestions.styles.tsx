import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) =>
    isSelected ? '#eee' : 'transparent'};
  cursor: pointer;
`;
