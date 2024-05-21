import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { Routes, Route}  from 'react-router-dom'
import {Home , Cart, Test } from './pages/users'
import { Home, Cart} from './pages/users';
import About from './components/About.js';
import WishList from './pages/users/WishList';
function App() {
 
  return (
    <div className='cnt-home'>
      <Header />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/carts'  element={<Cart />} />
        <Route path='/test'  element={<Test />} />
        <Route path='/carts' element={<Cart />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/about'  element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

