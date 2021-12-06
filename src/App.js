import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Next from './pages/Next/Next';
import Latest from './pages/Latest/Latest';
import History from './pages/History';
import { QueryClient, QueryClientProvider } from 'react-query';
import defaultOptions from './lib/queryDefaults';

function App() {
  const queryClient = new QueryClient(defaultOptions);
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Next />} />
          <Route path='/latest' element={<Latest />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </AnimatePresence>
    </QueryClientProvider>
  );
}

export default App;
