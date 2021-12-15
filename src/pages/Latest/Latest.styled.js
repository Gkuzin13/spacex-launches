import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 17%;
  width: 100%;

  @media (min-width: 768px) {
    ${(props) => props.videoOpen && `bottom: 15%`}
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

  div {
    width: 100%;
  }

  @media (min-width: 768px) {
    height: 65vh;
    width: 75%;
    ${(props) => props.videoOpen && `flex-direction: row`};
    ${(props) => props.videoOpen && `padding-top: 4rem`};
  }

  h3 {
    font-weight: normal;
  }
  h2 {
    text-transform: uppercase;
    font-size: 3rem;
  }
`;
