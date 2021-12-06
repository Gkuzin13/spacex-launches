import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;

  button {
    color: white;
    background-color: transparent;
    border: none;
    padding: 0;
    text-align: center;
    cursor: pointer;
    font-size: 0.9rem;
  }

  p {
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
