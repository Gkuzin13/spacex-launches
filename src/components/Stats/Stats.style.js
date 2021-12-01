import styled, { keyframes } from 'styled-components';

export const dash = keyframes`
from {
  stroke-dashoffset: 450;
} to {
  stroke-dashoffset: ${(props) => props.offset};
}
`;

export const Container = styled.div`
  border: 2px blue solid;
  position: relative;
  div {
    position: absolute;
    right: 0;
    width: 50%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  width: 200px;
  svg {
    width: 200px;
    border: 2px red solid;
  }

  path {
    stroke-width: 3;
  }

  path.grey {
    stroke: lightgrey;
  }

  path.purple {
    stroke: green;
    stroke-dasharray: 450;
    stroke-dashoffset: ${(props) => props.offset};
    animation: ${dash} 2s cubic-bezier(0.4, 0.1, 0.1, 1) infinite;
  }

  text {
    text-anchor: middle;
    font-size: 0.6rem;
  }

  .digit {
    font-size: 3.75rem;
    font-weight: bold;
  }
`;

export const Digit = styled.tspan`
  font-size: 1.75rem;
`;
