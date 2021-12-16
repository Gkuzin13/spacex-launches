import styled from 'styled-components';
import { fadeRevealY } from '../../utils/theme';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100%;
`;

export const InnerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  height: 40vh;
  margin: 0 auto;
  color: white;
  text-transform: uppercase;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    width: 75%;
    height: 33vh;
  }

  h3 {
    animation: ${fadeRevealY} 0.15s ease-in forwards 0.15s;
    opacity: 0;
    font-weight: normal;
  }
  h2 {
    animation: ${fadeRevealY} 0.15s ease-in forwards 0.2s;
    opacity: 0;
    font-size: 3.2rem;
  }
`;
