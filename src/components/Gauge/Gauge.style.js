import styled, { keyframes } from 'styled-components';

export const dash = keyframes`
from {
  stroke-dashoffset: 450;
} to {
  stroke-dashoffset: ${(props) => props.offset};
}
`;

export const Container = styled.div`
  svg {
    width: 180px;
  }

  path {
    stroke-width: 4;
  }

  path.grey {
    stroke-width: 4;
    stroke: rgba(0, 0, 0, 0.2);
  }

  path.blue {
    stroke: ${(props) => props.theme.blue};
    stroke-dasharray: 450;
    stroke-dashoffset: ${(props) => props.offset};
    animation: ${dash} 2s cubic-bezier(0.4, 0.1, 0.1, 1) forwards;
  }

  text {
    fill: ${(props) => props.theme.gray};
    text-anchor: middle;
    font-size: 0.55rem;
  }
`;

export const Digit = styled.tspan`
  fill: ${(props) => props.theme.white};
  font-size: 1.3rem;
`;
