import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Cart  from './pages/users/Cart.js';



function App() {

  return (
    <div className='cnt-home'>
      <Header />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;

