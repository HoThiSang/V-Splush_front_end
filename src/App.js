import './App.css';
import Header from './layouts/Header.js';
import Footer from './layouts/Footer.js';
import { Routes, Route}  from 'react-router-dom'
import { Home, Cart, Test, Blog,BlogDetail,ContactUs, CheckoutForm, CheckoutSuccess,ProductDetail,AboutUs, CheckoutBuyNow, OrderHistory} from './pages/users'
import About from './components/About.js';
import Search from './components/Search.js';
import Product from './pages/users/Product.js';
import RegistrationForm from './pages/auth/RegisterUser.js';
import Login from './pages/auth/Login.js';
import { CurrentUserContext, CurrentUserProvider } from './context/CurrentUserContext.js';
import Error from './pages/users/404.js';
import UserProfile from './pages/users/UserProfile.js';

function App() {
 
  return (

  <CurrentUserProvider>
      <div className='cnt-home'> 
        <Header />
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/carts'  element={<Cart />} />
          <Route path='/test'  element={<Test />} />
          <Route path='/about'  element={<About />} />
          <Route path='/products' element={<Product />} />
          <Route path='/register'  element={<RegistrationForm />} />
          <Route path='/login'  element={<Login />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog-detail/:id' element={<BlogDetail />} />
          <Route path='/about' element={<About />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path='/contact-us' element={<ContactUs />}/>
          <Route path='/profile-user' element={<UserProfile />}/>
          <Route path='/checkout' element={<CheckoutForm />}/>
          <Route path='/checkoutSuccess' element={<CheckoutSuccess />}/>
          <Route path='/search' element={<Search />} />
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/buy-now' element={<CheckoutBuyNow />}/>
          <Route path='/order-history' element={<OrderHistory />}/>
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </CurrentUserProvider>

  );
}

export default App;
