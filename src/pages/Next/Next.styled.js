import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 5%;
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

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    width: 75%;
    height: 32vh;
  }

  h3 {
    font-weight: normal;
  }
  h2 {
    text-transform: uppercase;
    font-size: 3.2rem;
  }
`;
