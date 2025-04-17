import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import './index.css';
import MainLayout from './Layout/MainLayout';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import { FavoritesProvider } from './context/FavoritesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <ScrollToTop />
          <MainLayout>
            <AppRoutes></AppRoutes>
          </MainLayout>
        </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>
);