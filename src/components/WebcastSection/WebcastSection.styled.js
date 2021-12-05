import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.8);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

const slideIn = keyframes`
  from { transform: translateY(-250px) skewX(35deg);}
  to { transform: translateY(0px) skew(0deg, 0deg)};
`;

const slideOut = keyframes`
  from { transform: translateY(0px) skew(0deg,0deg);}
  to { transform: translateY(250px) skewX(20deg)};
`;

export const Wrapper = styled.div`
  flex-direction: column;
  place-items: center;
  display: flex;
  animation: ${fadeIn} 1s cubic-bezier(0.175, 0.885, 0.32, 1) forwards;
`;

export const ReturnButton = styled.button`
  width: 150px;
  height: 50px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 1px;
  text-align: center;
  font-weight: 600;
  position: relative;
  transition: all 0.15s linear;
  cursor: pointer;
  overflow: hidden;
  margin-top: 2rem;

  span {
    margin: 0 0.5rem;
  }

  svg {
    font-size: 1.1rem;
  }

  &:hover {
    color: white;
  }
  &:after {
    position: absolute;
    content: '';
    background-color: black;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1px;
    color: white;
    z-index: -1;
    animation: ${slideOut} 0.35s cubic-bezier(0.8, 0.5, 0.8, 0.1);
    transform: translateX(500px) skewX(-20deg);
  }
  &:hover:after {
    background-color: black;
    animation: ${slideIn} 0.35s cubic-bezier(0.1, 0.5, 0, 1) forwards;
  }
`;
