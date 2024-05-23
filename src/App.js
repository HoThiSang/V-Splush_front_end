import './App.css';
import Header from './layouts/Header.js';
import Footer from './layouts/Footer.js';
import { Routes, Route}  from 'react-router-dom'
import { Home, Cart, Test, WishList, HomeTest } from './pages/users'
import About from './components/About.js';
import {Blog} from './pages/users/Blog.js';
import {Blog, BlogDetail} from './pages/users/Blog.js';
function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'  element={<HomeTest />} />
        <Route path='/carts'  element={<Cart />} />
        <Route path='/test'  element={<Test />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog-detail/:id' element={<BlogDetail />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

