import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Next from './pages/Next';
import Latest from './pages/Latest/Latest';
import History from './pages/History';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Next />} />
          <Route path='/latest' element={<Latest />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
