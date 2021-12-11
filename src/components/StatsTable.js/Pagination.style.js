import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  ul {
    display: flex;
  }
`;

export const PageButton = styled.a`
  a {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    text-align: center;
    background-color: rgb(20, 20, 20);
    color: ${(props) => (props.thisPage ? 'rgb(50, 139, 254)' : 'white')};

    &:hover {
      color: rgb(50, 139, 254);
    }
  }
`;
