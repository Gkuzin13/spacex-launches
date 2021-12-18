import styled from 'styled-components';
import { fadeRevealY } from '../../utils/theme';

export const Container = styled.div`
  margin-top: 0.5rem;
  padding-bottom: 4rem;
  animation: ${fadeRevealY} 0.15s ease-in forwards 0.3s;
  opacity: 0;
  text-transform: none;

  button {
    ${(props) => props.open && 'color:' + props.theme.gray};
    background-color: transparent;
    border: none;
    padding: 0;
    text-align: center;
    cursor: pointer;

    svg {
      padding-right: 0.15rem;
      transition: transform 0.2s cubic-bezier(0.5, 0, 0, 0.7);
      transform: ${(props) => (props.open ? 'rotate(90deg)' : 'rotate(0deg)')};
    }
  }

  p {
    color: ${(props) => (props.details ? props.theme.white : props.theme.gray)};
    margin: 0.25rem 0;
    font-size: 1.1rem;
    transition: all 0.2s cubic-bezier(0.5, 0, 0, 0.7);
    opacity: ${({ open }) => (open ? '1' : '0')};
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    transform: ${({ open }) => (open ? 'scale(1)' : 'scale(0.95)')};

    @media (min-width: 768px) {
      width: 75%;
    }
  }
`;
