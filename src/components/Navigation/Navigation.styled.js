import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2em;
  margin: 0 2rem;

  span {
    position: absolute;
    top: 4%;
    left: 2rem;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 1em 2em;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  a,
  a:visited {
    cursor: pointer;
    margin-left: 1em;
    padding: 0.25rem;
    font-weight: 400;
  }
`;

export const LogoWrapper = styled.div``;
