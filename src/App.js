import './App.css';
import Header from './layouts/Header.js';
import Footer from './layouts/Footer.js';
import { Routes, Route}  from 'react-router-dom'
import { Home, Cart, Test, WishList, HomeTest } from './pages/users'
import About from './components/About.js';
import {Blog} from './pages/users/Blog.js';
import {Blog, BlogDetail} from './pages/users/Blog.js';
import {Home , Cart, Test,Blog} from './pages/users'

function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'  element={<HomeTest />} />
        <Route path='/carts'  element={<Cart />} />
        <Route path='/test'  element={<Test />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

