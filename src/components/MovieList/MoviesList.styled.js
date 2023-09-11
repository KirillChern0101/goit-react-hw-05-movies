import { Link } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { FaFilm } from 'react-icons/fa';

import placeholder from '../images/placeholder.png';

export const List = styled.ul`
  list-style: none;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Item = styled.li`
  padding: 10px 12px;
  border-bottom: 1px solid #ccc;
  position: relative;

  &:last-child {
    border-bottom: none;
  }
`;

export const LinkDetails = styled(Link)`
  color: white; /* Цвет текста белый */
  text-decoration: none;
  margin: 1px;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: #ff5733;
  }

  @media screen and (min-width: 768px) {
    position: relative;
    overflow: hidden;

    &:hover::after,
    &:focus::after {
      content: '';
      background-image: ${props =>
        props.cover
          ? `url('https://image.tmdb.org/t/p/w500/${props.cover}')`
          : `url(${placeholder})`};

      background-size: cover;
      width: 160px;
      height: 240px;
      display: block;
      border-radius: 4px;
      border: 1px solid rgba(43, 134, 197);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      position: absolute;
      top: -140px;
      left: 100%;
      margin-left: 10px;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;
      transform: translateX(-20px);
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const LogoIcon = styled(FaFilm)`
  width: 20px;
  height: 20px;
  position: relative;
  right: 6px;
  top: 5px;
  z-index: 1;
  opacity: 0.7;
  color: #ff5733;
`;

LinkDetails.propTypes = {
  cover: propTypes.string,
  placeholder: propTypes.string,
};
