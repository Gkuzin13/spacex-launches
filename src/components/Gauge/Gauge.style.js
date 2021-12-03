import styled, { keyframes } from 'styled-components';

export const dash = keyframes`
from {
  stroke-dashoffset: 450;
} to {
  stroke-dashoffset: ${(props) => props.offset};
}
`;

export const Container = styled.div`
  margin: 0 2rem;

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
    stroke: rgba(180, 83, 83, 0.35);
  }

  path.purple {
    stroke: rgb(8, 255, 0, 50%);
    stroke-dasharray: 450;
    stroke-dashoffset: ${(props) => props.offset};
    animation: ${dash} 2s cubic-bezier(0.4, 0.1, 0.1, 1) forwards;
  }

  text {
    text-anchor: middle;
    font-size: 0.5rem;
  }
`;

export const Digit = styled.tspan`
  font-size: 1.25rem;
`;
