import React from 'react';
import Navbar from './Navbar';
import '../App.css';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='bg main-app'>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
