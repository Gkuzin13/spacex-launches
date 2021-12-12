import styled from 'styled-components';

export const Wrapper = styled.div``;

export const GaugeWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(4, 1fr);
    height: 32rem;
    padding: 12rem 20rem;
  }
`;
