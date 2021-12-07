import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.mobile}) {
  }
`;

export const GaugeWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 24px;
  padding-top: 10rem;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(4, 1fr);
    height: 32rem;
    padding: 14rem 18rem;
  }
`;
