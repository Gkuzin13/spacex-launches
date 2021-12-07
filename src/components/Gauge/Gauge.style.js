import styled, { keyframes } from 'styled-components';

export const dash = keyframes`
from {
  stroke-dashoffset: 450;
} to {
  stroke-dashoffset: ${(props) => props.offset};
}
`;

export const Container = styled.div`
  div {
    position: absolute;
    right: 0;
    width: 50%;
    height: 75%;
  }
  svg {
    width: 200px;
  }

  path {
    stroke-width: 4;
  }

  path.grey {
    stroke-width: 4;
    stroke: rgba(0, 0, 0, 0.2);
  }

  path.purple {
    stroke: rgb(50, 139, 254);
    stroke-dasharray: 450;
    stroke-dashoffset: ${(props) => props.offset};
    animation: ${dash} 2s cubic-bezier(0.4, 0.1, 0.1, 1) forwards;
  }

  text {
    fill: rgb(222, 222, 222);
    text-anchor: middle;
    font-size: 0.5rem;
  }
`;

export const Digit = styled.tspan`
  fill: white;
  font-size: 1.25rem;
`;
