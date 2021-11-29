import styled from 'styled-components';

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
  li {
    cursor: pointer;
    margin-left: 1em;
    font-weight: 400;
  }
`;
