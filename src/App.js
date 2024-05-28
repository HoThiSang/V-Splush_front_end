import './App.css';
import Header from './layouts/Header.js';
import Footer from './layouts/Footer.js';
import { Routes, Route}  from 'react-router-dom'
import { Home, Cart, Test, WishList,Blog,BlogDetail} from './pages/users'
import About from './components/About.js';
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
        <Route path='/products' element={<Product />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog-detail/:id' element={<BlogDetail />} />
    </Routes>
      <Footer />
    </>
  );
}

export default App;

