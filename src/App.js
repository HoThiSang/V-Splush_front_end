import './App.css';
import Header from './layouts/Header.js';
import Footer from './layouts/Footer.js';
import { Routes, Route}  from 'react-router-dom'
import { Home, Cart, Test, WishList,Blog } from './pages/users'
import About from './components/About.js';
import Product from './pages/users/Product.js';
import Register from './pages/auth/RegisterUser.js';
function App() {
 
  return (
    <div className='cnt-home'> 
      <Header />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/carts'  element={<Cart />} />
        <Route path='/test'  element={<Test />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/about'  element={<About />} />
        <Route path='/products' element={<Product />} />
        <Route path='/register'  element={<Register />} />
    </Routes>
      <Footer />
    </div>
  );
}

export default App;