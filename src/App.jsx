import Footer from './component/Footer';
import Header from './component/Header';
import { Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Admin from './Admin/Admin';
function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/admin' element={<Admin/>}/>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
