import './App.css';
import Header from './layouts/Header.js';
import Footer from './layouts/Footer.js';
import { Routes, Route}  from 'react-router-dom'
import { Home, Cart, Test, WishList,Blog,BlogDetail,ContactUs, CheckoutForm, CheckoutSuccess,ProductDetail} from './pages/users'
import About from './components/About.js';
import Search from './components/Search.js';
import Product from './pages/users/Product.js';
import RegistrationForm from './pages/auth/RegisterUser.js';
import Login from './pages/auth/Login.js';
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
        <Route path='/register'  element={<RegistrationForm />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/checkout'  element={<CheckoutForm />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog-detail/:id' element={<BlogDetail />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/productdetail/:id' element={<ProductDetail />} />
        <Route path='/search' element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;