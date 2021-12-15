import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 30rem;
  text-align: center;
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
  font-size: 0.9rem;
  margin-right: 0.75rem;
  color: ${(prop) => prop.theme.gray};
`;

export const Digit = styled.span`
  font-size: 5rem;
  color: white;
`;
