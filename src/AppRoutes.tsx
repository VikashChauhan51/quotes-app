import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./features/Home'));
const ContactUs = lazy(() => import('./features/ContactUs'));
const Quotes = lazy(() => import('./features/Quotes'));
const Loader = lazy(() => import('./components').then(module => ({ default: module.Loader })));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
