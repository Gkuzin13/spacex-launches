import styled from 'styled-components';

export const Container = styled.div`
  border: 2px blue solid;
  svg {
    width: 200px;
    border: 2px red solid;
  }

  path {
    stroke-width: 6;
  }

  path.grey {
    stroke: lightgrey;
  }

  path.purple {
    stroke: red;
    stroke-dasharray: 450;
    stroke-dashoffset: 300;
    /* adjust last number for variance */
  }

  text {
    text-anchor: middle;
  }

  .digit {
    font-size: 3.75rem;
    font-weight: bold;
  }
`;

export const Digit = styled.span`
  font-size: 3.75rem;
  font-weight: bold;
`;
