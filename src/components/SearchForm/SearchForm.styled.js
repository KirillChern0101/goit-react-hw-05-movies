import styled from 'styled-components';
import { FcSearch } from 'react-icons/fc';

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 16px;
  flex-wrap: wrap;

  input {
    font-size: 1rem;
    padding: 8px 32px 8px 8px;
    width: 250px;
    background-color: transparent;
    border: none;
    border-bottom: 4px solid white;
    outline: none;
  }
`;

export const Icon = styled(FcSearch)`
  width: 20px;
  height: 20px;
  position: relative;
  right: 56px;
  z-index: 1;
  opacity: 0.7;
`;
