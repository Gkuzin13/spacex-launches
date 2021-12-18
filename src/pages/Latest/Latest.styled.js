import styled, { keyframes } from 'styled-components';
import { fadeRevealX } from '../../utils/theme';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding-top: ${(props) => (props.videoOpen ? '12rem' : '8rem')};
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 90%;
  height: 75vh;
  margin: 0 auto;
  animation: ${fadeIn} 1s cubic-bezier(0.175, 0.885, 0.32, 1) forwards;
  text-transform: uppercase;

  div {
    width: 100%;
  }

  @media (min-width: 768px) {
    height: 69vh;
    width: 75%;
    ${(props) => props.videoOpen && `flex-direction: row`};
    ${(props) => props.videoOpen && `height: 40vh`};
  }

  h3 {
    font-weight: normal;
    animation: ${fadeRevealX} 0.15s ease-in forwards 0.15s;
    opacity: 0;
  }
  h2 {
    font-size: 3rem;
    animation: ${fadeRevealX} 0.15s ease-in forwards 0.2s;
    opacity: 0;
  }
`;
