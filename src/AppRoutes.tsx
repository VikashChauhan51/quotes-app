import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import NetworkStatus from './hooks/NetworkStatus';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./features/Home'));
const ContactUs = lazy(() => import('./features/ContactUs'));
const Quotes = lazy(() => import('./features/quotes').then(module => ({ default: module.Quotes })));
const AddQuote = lazy(() => import('./features/quotes').then(module => ({ default: module.AddQuote })));
const Loader = lazy(() => import('./components').then(module => ({ default: module.Loader })));
const NotFound = lazy(() => import('./features/NotFound'));


const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/quotes" element={ <NetworkStatus><ErrorBoundary><Quotes /></ErrorBoundary></NetworkStatus>} />
        <Route path="/add-quote" element={ <NetworkStatus><AddQuote /></NetworkStatus>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
