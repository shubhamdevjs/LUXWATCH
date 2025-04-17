import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Catalog from './pages/catalog';
// import ProductD from './Components/ProductDetails/ProductDetails';
import ProductD from './pages/product';
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/product/:id" element={<ProductD />} />
  </Routes>
);

export default AppRoutes;