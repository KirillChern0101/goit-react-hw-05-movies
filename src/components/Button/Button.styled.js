import styled from 'styled-components';

export const Btn = styled.button`
  padding: 8px 16px;
  margin: 0 16px 16px 0;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-size: 16px;
  background-color: #800000;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  border: 2px solid transparent;

  &:hover {
    background-color: #cc0000;
  }

  &:active {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;
