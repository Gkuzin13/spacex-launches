import styled from 'styled-components';

export const InnerSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: auto;
  bottom: 50%;
  left: 25px;
  right: 25px;
  color: white;

  @media (min-width: 768px) {
    bottom: 22.5%;
    left: 120px;
    right: 120px;
    flex-direction: row-reverse;
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
