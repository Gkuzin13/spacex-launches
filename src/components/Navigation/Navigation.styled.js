import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  padding: 0 2.5rem;
  position: fixed;
  z-index: 99;
  transition: background-color 0.35s linear;
  ${(props) => !props.halfScreenScroll && `background-color: rgb(8,8,10);`};

  @media (min-width: 768px) {
    padding: 4rem 0;
    justify-content: space-around;
  }
`;

export const NavStyle = styled.nav`
  color: white;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  a,
  a:visited {
    cursor: pointer;
    margin-left: 3.5rem;
    font-weight: 600;
    position: relative;
  }

  a {
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: white;
      width: 100%;
      height: 2px;
      transition: transform 0.15s linear;
      transform: scaleY(0);
      margin-bottom: -1px;
    }
    &:hover {
      &:after {
        transform: scaleY(1);
      }
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 20%;
`;
