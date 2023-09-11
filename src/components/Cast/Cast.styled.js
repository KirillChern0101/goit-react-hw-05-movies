import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  background-color: #f7f7f7;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  img {
    max-width: 100%;
    border-radius: 5px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;
