import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Catalog from './pages/catalog';
import FavoritesPage from './pages/favourites';
import ProductD from './pages/product';
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/product/:id" element={<ProductD />} />
    <Route path="/favourites" element={<FavoritesPage />} />
    <Route path="*" element={<div className="text-center mt-20">Page Not Found</div>} />
  </Routes>
);

export default AppRoutes;