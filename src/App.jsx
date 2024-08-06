import Footer from './component/Footer';
import Header from './component/Header';
import { Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Admin from './Admin/Admin';

import { CartProvider } from './component/CartContext';
import { Home } from './pages/Home/Home';
import { Banner } from './pages/Home/Banner';
import { SingleAssetPage } from './pages/SignleAssetPage';
function App() {
  return (
    <div>
      <CartProvider>
           <Header/>
             <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path="/shop" element={<Shop />} />
               <Route path="/cart" element={<Cart />} />
               <Route path='/admin' element={<Admin/>}/>
               <Route path='/product/:id' element={<SingleAssetPage/>}/>
             </Routes>
           <Footer/>
      </CartProvider>
    </div>
  );
}

export default App;
