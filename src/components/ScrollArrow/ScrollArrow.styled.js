import styled, { keyframes } from 'styled-components';

export const arrow = keyframes`
0% {
    opacity: 1;
    transform: translate(0px, 0px);
} 100% {
    opacity: 0;
    transform: translate(10px, 10px);
}
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 5%;
  width: 100%;
  padding-left: 1.05rem;
  opacity: ${(props) => props.scrollHeight};

  div {
    bottom: 25%;
    width: 15px;
    height: 15px;
    margin: -20px 0 0 -20px;
    transform: rotate(45deg);
    border-left: none;
    border-top: none;
    border-right: 2px rgb(200, 200, 200) solid;
    border-bottom: 2px rgb(200, 200, 200) solid;

    &:before {
      content: '';
      position: absolute;
      width: 7px;
      height: 7px;
      top: 50%;
      left: 50%;
      margin: -10px 0 0 -10px;
      border-left: none;
      border-top: none;
      border-right: 1px rgb(200, 200, 200) solid;
      border-bottom: 1px rgb(200, 200, 200) solid;
      opacity: 0;
      animation: ${arrow} 3s cubic-bezier(0.8, 0.82, 0.8, 0.7) infinite;
    }
  }
`;
