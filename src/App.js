import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { theme } from './theme';
import Navigation from './components/Navigation/Navigation';
import Next from './pages/Next';
import Recent from './pages/Recent';
import History from './pages/History';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Navigation />
          <Routes>
            <Route path='/' element={<Next />} />
          </Routes>
          <Routes>
            <Route path='/recent' element={<Recent />} />
          </Routes>
          <Routes>
            <Route path='/history' element={<History />} />
          </Routes>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
