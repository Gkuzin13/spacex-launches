import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 35%;
  right: 6%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: all 0.3s linear;
  transform: ${({ open }) => (open ? 'rotate(-90deg)' : 'rotate(0)')};

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.white};
    border-radius: 10px;
    transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    transform-origin: 0.7px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
