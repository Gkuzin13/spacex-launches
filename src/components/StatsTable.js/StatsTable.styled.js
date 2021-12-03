import styled from 'styled-components';

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const TableScroll = styled.div`
  height: 200px;
  margin-top: 5px;

  @media screen and (min-width: 768px) {
    overflow: auto;
  }
`;

export const Table = styled.table`
  border: 2px solid rgba(250, 250, 250, 0.5);
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  caption {
    font-size: 1.5rem;
    margin: 0.5em 0 0.75em;
  }

  tr {
    border: 2px solid rgba(250, 250, 250, 0.5);
    padding: 0.35rem;
  }

  th,
  td {
    padding: 5rem;
    text-align: center;
  }

  th {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    border: 0;

    caption {
      font-size: 1.3em;
    }

    thead {
      border: none;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      border-bottom: 2px solid rgba(250, 250, 250, 0.5);
      display: block;
      margin-bottom: 2rem;
    }

    td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 1rem;
      text-align: right;
      padding: 0.75rem 0;
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
