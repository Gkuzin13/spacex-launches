import styled from 'styled-components';
import { fadeRevealY } from '../../utils/theme';

export const Container = styled.div`
  margin-top: 0.5rem;
  padding-bottom: 4rem;
  animation: ${fadeRevealY} 0.15s ease-in forwards 0.3s;
  opacity: 0;

  button {
    ${(props) => props.open && 'color:' + props.theme.gray};
    background-color: transparent;
    border: none;
    padding: 0;
    text-align: center;
    cursor: pointer;
  }

  p {
    color: ${(props) => (props.details ? props.theme.white : props.theme.gray)};
    font-size: 1.1rem;
    margin: 0.25rem 0;
    transition: all 0.2s cubic-bezier(0.5, 0, 0, 0.7);
    opacity: ${({ open }) => (open ? '1' : '0')};
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    transform: ${({ open }) => (open ? 'scale(1)' : 'scale(0.95)')};
    height: ${({ open }) => (open ? '100%' : '0rem')};

    @media (min-width: 768px) {
      width: 55%;
    }
  }
`;
