// Routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ContactUs from './ContactUs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes;
