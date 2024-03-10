import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const ContactUs = lazy(() => import('./ContactUs'));
const Quotes = lazy(() => import('./Quotes'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
