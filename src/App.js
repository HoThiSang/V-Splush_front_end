import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { Routes, Route}  from 'react-router-dom'
import { Home, Cart, Test, WishList } from './pages/users'
import About from './components/About.js';
import {Blog} from './pages/users/Blog.js';
import {Blog, BlogDetail} from './pages/users/Blog.js';
import {Home , Cart, Test,Blog} from './pages/users'

function App() {
 
  return (
    <div className='cnt-home'>
      <Header />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/carts'  element={<Cart />} />
        <Route path='/test'  element={<Test />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

