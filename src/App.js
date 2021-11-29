import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { theme } from './theme';
import Navigation from './components/Navigation/Navigation';
import Main from './pages/Main';
import Main2 from './pages/Main2';
import Main3 from './pages/Main3';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Navigation />
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
          <Routes>
            <Route path='/recent' element={<Main2 />} />
          </Routes>
          <Routes>
            <Route path='/history' element={<Main3 />} />
          </Routes>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
