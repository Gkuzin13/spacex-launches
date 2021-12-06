import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 400px;
  text-align: center;
  color: white;
  margin-bottom: 1.5rem;

  div {
    display: flex;
  }
`;

export const DigitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 7rem;
  font-size: 0.8rem;
  margin-right: 0.75rem;

  @media (max-width: 768px) {
    width: 6.5rem;
  }
`;

export const Digit = styled.span`
  font-size: 5rem;
`;
