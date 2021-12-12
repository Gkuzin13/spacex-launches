import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: ${({ theme }) => theme.primaryDark};
  width: 55%;
  height: 100vh;
  padding: 7rem 0rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.7s cubic-bezier(0.1, 0.1, 0.1, 1);
  transform: ${({ open }) =>
    open ? 'translateX(0%) skewX(0deg)' : 'translateX(125%) skewX(2.5deg)'};
  z-index: 9;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-right: 2rem;
  }

  li {
    font-size: 1rem;
    margin: 1.5rem 0;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: all 0.35s cubic-bezier(0.455, 0.03, 0.515, 0.955);

    a {
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: white;
        width: 100%;
        height: 1.25px;
        transition: transform 0.15s linear;
        transform: scaleY(0);
      }
      &:hover {
        &:after {
          transform: scaleY(1);
        }
      }
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
