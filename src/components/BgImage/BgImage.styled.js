import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
0% {
  opacity: 0;
} 100% {
  opacity: 1;
}
`;

export const BgImage = styled.div`
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    url(${(props) => props.imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  top: 0;
  opacity: 0;
  width: 100%;
  min-height: 100%;
  z-index: -99;
  animation: ${fadeIn} 0.5s cubic-bezier(0.4, 0.05, 0.155, 0.6) forwards 0.3s;
`;
