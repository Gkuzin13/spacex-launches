import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 24px;
  margin-top: 4rem;
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
