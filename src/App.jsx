import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, Login, Page404, Signup } from './pages';
import { MyFooter, Mynavbar } from './components';
import './assets/css/index.css';

const App = () => {
  return (
      <AppContent />
  );
};



const AppContent = () => {
  const location = useLocation();

  const pathsToHideNavbarAndFooter = ['/login', '/signup'];

  const hideNavbarAndFooter = pathsToHideNavbarAndFooter.includes(location.pathname);

  return (
    <>
      {!hideNavbarAndFooter && <Mynavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!hideNavbarAndFooter && <MyFooter />}
    </>
  );
};

export default App;
