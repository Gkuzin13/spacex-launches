import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AnimatePresence } from 'framer-motion';
import defaultOptions from './lib/queryDefaults';
import Next from './pages/Next/Next';
import Latest from './pages/Latest/Latest';
import History from './pages/History/History';

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
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </AnimatePresence>
    </QueryClientProvider>
  );
}

export default App;
