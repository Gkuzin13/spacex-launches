import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.primaryDark};
  height: 100vh;
  text-align: right;
  padding: 8rem 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.7s cubic-bezier(0.1, 0.1, 0.1, 1);
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
  z-index: 9;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    width: 55%;
    font-size: 1.5rem;
    text-align: center;
  }

  li {
    font-size: 1rem;
    margin: 1rem 0;
    padding: 0.5rem 0;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: all 0.35s;
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }

    :first-child {
      opacity: ${({ open }) => (open ? '1' : '0')};
      transform: ${({ open }) =>
        open ? 'translateY(0px)' : 'translate(100px)'};
      transition-delay: 0.01s;
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '1' : '0')};
      transform: ${({ open }) =>
        open ? 'translateY(0px)' : 'translate(100px)'};
      transition-delay: 0.05s;
    }

    :nth-child(3) {
      opacity: ${({ open }) => (open ? '1' : '0')};
      transform: ${({ open }) =>
        open ? 'translateY(0px)' : 'translate(100px)'};
      transition-delay: 0.1s;
    }
  }
`;
