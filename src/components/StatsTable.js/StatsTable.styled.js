import styled from 'styled-components';

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;

  @media screen and (min-width: 768px) {
    padding: 0 12rem;
    margin-top: 5rem;
  }
`;

export const Table = styled.table`
  border: 0;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  background-color: rgba(250, 250, 250, 0.05);

  caption {
    font-size: 2.5rem;
    margin: 0.5em 0 0.75em;
  }

  tr {
    border: 2px solid transparent;
    padding: 0.35rem;
    background-color: rgb(16, 16, 19);
  }

  th,
  td {
    padding: 0.5rem;
    text-align: center;
  }

  th {
    position: sticky;
    top: 7rem;
    background-color: rgb(19, 19, 19);
    border: 2px rgb(16, 16, 19) solid;
    padding: 1rem;
    font-size: 1rem;
    color: rgb(240, 240, 240);
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
      background-color: rgb(16, 16, 19);
    }

    td {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1rem;
      text-align: right;
      padding: 0.75rem 0.75rem;

      &:first-child {
        background-color: rgb(40, 40, 40);
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
  color: ${(props) => (props.success ? 'rgb(37,149,45)' : 'rgb(158,41,50)')};
  &::before {
    color: white;
  }
`;
