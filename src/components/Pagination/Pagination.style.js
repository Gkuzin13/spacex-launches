import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 1.5rem;

  ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0.75rem 0;
  }

  @media (max-width: 768px) {
    justify-content: center;
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
    color: ${(props) => props.thisPage && props.theme.blue};
    &:hover {
      color: ${(props) => props.theme.blue};
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 4rem;
    margin: 0rem;
  }
`;

export const PageButton = styled.button`
  transition: color 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  height: 4rem;
  font-size: 1.1rem;
  &:hover {
    color: ${(props) => props.theme.blue};
  }

  &:disabled {
    cursor: default;
    color: ${(props) => props.theme.midGray};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
