import styled from 'styled-components';
import { fadeRevealY } from '../../utils/theme';

export const Wrapper = styled.div`
  padding-bottom: 7rem;
  animation: ${fadeRevealY} 0.15s ease-in forwards 0.3s;
  opacity: 0;
`;
