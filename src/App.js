import './App.css';
import Header from './layouts/Header.js';
import Footer from './layouts/Footer.js';
import { Routes, Route}  from 'react-router-dom'
import { Home, Cart, Test, WishList, HomeTest } from './pages/users'
import { Home, Cart, Test, WishList,Blog } from './pages/users'
import About from './components/About.js';

function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'  element={<HomeTest />} />
        <Route path='/carts'  element={<Cart />} />
        <Route path='/test'  element={<Test />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/about'  element={<About />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

