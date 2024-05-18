import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import React, { useState, useEffect } from 'react';
import Home  from './pages/users/Home.js';
function App() {
 
  return (
    <div className='cnt-home'>
      <Header />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;

