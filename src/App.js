import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { Routes, Route}  from 'react-router-dom'
import {Home , Cart, Test } from './pages/users'
function App() {
 
  return (
    <div className='cnt-home'>
      <Header />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/carts'  element={<Cart />} />
        <Route path='/test'  element={<Test />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

