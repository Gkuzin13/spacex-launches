import styled from 'styled-components';

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => props.theme.black};

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 75%;
  }
`;

export const Table = styled.table`
  border: 0;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 45rem;
  table-layout: fixed;
  overflow: hidden;

  caption {
    font-size: 2.5rem;
    margin: 0.5em 0 0.75em;
  }

  tr {
    border: 2px solid transparent;
    background-color: ${(props) => props.theme.black};
  }

  td {
    padding: 0 0.75rem;
  }

  th,
  td {
    text-align: center;
    border-bottom: 2px ${(props) => props.theme.darkGray} solid;
  }

  th {
    background-color: ${(props) => props.theme.darkGray};
    border: 2px rgb(21, 21, 21) solid;
    padding: 0.75rem;
    font-size: 1rem;
    color: ${(props) => props.theme.light};
    font-weight: 100;
  }

  a {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    tr {
      border: 0;
      padding: 0;
    }

    caption {
      font-size: 2.5rem;
    }

    thead {
      border: none;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      position: absolute;
      width: 1px;
    }

    tr {
      display: block;
      margin-bottom: 1rem;
      background-color: ${(props) => props.theme.black};
    }

    td {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1rem;
      text-align: right;
      padding: 0.75rem 0.75rem;

      &:first-child {
        background-color: ${(props) => props.theme.darkGray};
      }
    }

    td::before {
      /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    td:last-child {
      border-bottom: 0;
    }
  }
`;

export const Td = styled.td`
  ${(props) => props.status === 'SUCCESS' && 'color: rgb(37,149,45)'};
  ${(props) => props.status === 'FAILURE' && 'color: rgb(184 43 44)'};
  ${(props) => props.status === 'NO ATTEMPT' && 'color: rgb(100,100,100)'};
  ${(props) => props.status === 'NO DATA' && 'color: rgb(100,100,100)'};

  &::before {
    color: white;
  }
`;

export const TableBorder = styled.div`
  margin-top: 0.25rem;
  background-color: rgb(35, 35, 35);
  height: 1px;
  width: 98%;
`;
