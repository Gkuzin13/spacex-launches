import { useEffect, useState } from 'react';
import client from './utils/fetch';
import styled from 'styled-components';
import Main from './pages/Main';

const Logo = styled.span`
  color: white;
  font-weight: 400;
  letter-spacing: 1px;
`;

function App() {
  const [data, setData] = useState(null);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
