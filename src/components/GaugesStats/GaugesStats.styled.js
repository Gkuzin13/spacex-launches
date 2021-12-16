import styled from 'styled-components';
import { fadeRevealY } from '../../utils/theme';

export const GaugesWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 32px;
  padding: 12rem 0rem;
  width: 95%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  animation: ${fadeRevealY} 0.15s ease-in forwards 0.15s;
  opacity: 0;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(4, 1fr);
    height: 350px;
    width: 65%;
    gap: 0px;
  }
`;
