import styled from 'styled-components';
import { fadeRevealY } from '../../utils/theme';

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
  font-size: 0.9rem;
  margin-right: 0.75rem;
  color: ${(prop) => prop.theme.gray};
  opacity: 0;
  animation: ${fadeRevealY} 0.15s ease-in forwards 0.3s;
`;

export const Digit = styled.span`
  font-size: 5rem;
  width: 7rem;
  color: white;
`;
