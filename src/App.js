import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import useWindowSize from './hooks/useWindowSize';
import store from './app/store';
import Next from './pages/Next/Next';
import Latest from './pages/Latest/Latest';
import Stats from './pages/Stats/Stats';

function App() {
  const location = useLocation();
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;

  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Next isMobile={isMobile} />} />
          <Route path='/latest' element={<Latest isMobile={isMobile} />} />
          <Route
            path='/stats'
            element={<Stats windowSize={windowSize} isMobile={isMobile} />}
          />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </AnimatePresence>
    </Provider>
  );
}

export default App;
