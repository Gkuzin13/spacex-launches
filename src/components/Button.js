import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from { transform: translateX(-250px) skewX(35deg);}
  to { transform: translateX(0px) skew(0deg, 0deg)};
`;

const slideOut = keyframes`
  from { transform: translateX(0px) skew(0deg,0deg);}
  to { transform: translateX(250px) skewX(20deg)};
`;

const TransButton = styled.button`
  width: 160px;
  height: 55px;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 1px;
  text-align: center;
  font-weight: 600;
  position: relative;
  transition: all 0.15s linear;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    color: black;
  }
  &:after {
    position: absolute;
    content: '';
    background-color: white;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1px;
    color: black;
    z-index: -1;
    animation: ${slideOut} 0.3s cubic-bezier(0.5, 0, 0, 0);
    transform: translateX(500px) skewX(-20deg);
  }
  &:hover:after {
    background-color: white;
    animation: ${slideIn} 0.3s cubic-bezier(0.1, 0.5, 0, 1) forwards;
  }
`;

const Button = ({ text }) => {
  function onClick() {
    console.log('hi');
  }
  return <TransButton>{text}</TransButton>;
};

export default Button;
