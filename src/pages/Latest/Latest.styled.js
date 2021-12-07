import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const SectionWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 12%;
  left: 25px;
  right: 25px;
  color: white;
  animation: ${fadeIn} 1s cubic-bezier(0.175, 0.885, 0.32, 1) forwards;

  @media (min-width: 768px) {
    bottom: 20%;
    left: 15%;
    right: 15%;
    ${(props) => props.videoOpen && `flex-direction: row;`}
  }

  h3 {
    padding-top: 1rem;
    font-weight: normal;
  }
  h2 {
    text-transform: uppercase;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;
