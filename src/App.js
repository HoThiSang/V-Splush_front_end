import './App.css';
import Header from './layouts/Header.js';
import Footer from './layouts/Footer.js';
import { Routes, Route}  from 'react-router-dom'
import { Home, Cart, Test, WishList,Blog } from './pages/users'
import About from './components/About.js';
import {Home , Cart, Test } from './pages/users'
import Product from './pages/users/Product.js';
function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/carts'  element={<Cart />} />
        <Route path='/test'  element={<Test />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/about'  element={<About />} />
    </Routes>
      <Footer />
    </>
  );
}

export default App;

