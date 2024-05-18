import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import {Home , Cart } from './pages/users'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Routes, Route}  from 'react-router-dom'




function App() {

  return (
    <div className='cnt-home'>
      <Header />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/carts'  element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

