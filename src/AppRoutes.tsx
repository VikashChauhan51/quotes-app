// Routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ContactUs from './ContactUs';
import Quotes from './Quotes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  );
};

export default AppRoutes;
