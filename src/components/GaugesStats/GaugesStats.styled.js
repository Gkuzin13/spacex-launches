import styled from 'styled-components';

export const GaugesWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 24px;
  padding: 12rem 0rem;
  height: 100vh;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(4, 1fr);
    height: 32rem;
    padding: 12rem 24rem;
  }
`;
