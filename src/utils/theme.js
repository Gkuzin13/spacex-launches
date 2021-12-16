import { keyframes } from 'styled-components';

export const theme = {
  black: 'rgb(16, 16, 19)',
  gray: 'rgb(195, 199, 196)',
  midGray: 'rgb(88, 91, 86)',
  darkGray: 'rgb(21, 21, 21)',
  white: 'rgb(255, 255, 255)',
  light: 'rgb(241, 242, 239)',
  blue: 'rgb(50, 139, 254)',
  primaryHover: '#A9A9A9',
  mobile: '768px',
};

export const fadeRevealY = keyframes`
  0% { 
  transform: translateY(20px);
  opacity: 0,
  } 100% {
  transform: translateY(0px);
  opacity: 1;`;

export const fadeRevealX = keyframes`
  0% { 
  transform: translateX(-10px);
  opacity: 0,
  } 100% {
  transform: translateX(0px);
  opacity: 1;`;
