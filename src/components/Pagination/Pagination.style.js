import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 1rem;

  ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0.75rem 0;
  }
`;

export const PageNumber = styled.li`
  width: 2rem;
  text-align: center;
  margin: 0 0.25rem;

  a {
    width: 2rem;
    padding: 0.25rem;
    transition: color 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    color: ${(props) => (props.thisPage ? 'rgb(50, 139, 254)' : 'white')};
    &:hover {
      color: rgb(50, 139, 254);
    }
  }
`;

export const PageButton = styled.button`
  transition: color 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  height: 4rem;
  color: white;
  &:hover {
    color: rgb(50, 139, 254);
  }

  &:disabled {
    cursor: default;
    color: rgb(55, 55, 55);
  }
`;
