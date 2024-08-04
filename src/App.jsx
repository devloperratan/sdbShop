import Footer from './component/Footer';
import Header from './component/Header';
import { Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Admin from './Admin/Admin';

import { CartProvider } from './component/CartContext';
function App() {
  return (
    <div>
          <CartProvider>
      <Header/>
        <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      <Footer/>
      </CartProvider>
    </div>
  );
}

export default App;
