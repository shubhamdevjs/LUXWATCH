// src/pages/Catalog.jsx
import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import { products as allProducts } from '../../data/products';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaFilter, FaRegHeart, FaHeart } from 'react-icons/fa';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CatalogPage = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const brandQuery = query.get('brand') || '';

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [initialFilters, setInitialFilters] = useState({
    priceRange: '',
    brand: '',
    color: '',
    category: ''
  });
  const [sortValue, setSortValue] = useState('popular');
  const [loading, setLoading] = useState(false);

   // FAVORITES STATE (in‐memory only)
   const [favorites, setFavorites] = useState([]);

  const initialCount  = 15;
  const loadMoreCount = 6; // 2 rows × 3 cols
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortValue(value);
    setLoading(true);
    setTimeout(() => {
      let sorted = [...filteredProducts];
      if (value === 'lowToHigh')      sorted.sort((a, b) => a.price - b.price);
      else if (value === 'highToLow') sorted.sort((a, b) => b.price - a.price);
      setFilteredProducts(sorted);
      setVisibleCount(initialCount);
      setLoading(false);
    }, 1000);
  };

  // Shop‐by‐brand URL param effect
  useEffect(() => {
    if (brandQuery) {
      const byBrand = allProducts.filter(
        (p) => p.brand.toLowerCase() === brandQuery.toLowerCase()
      );
      setFilteredProducts(byBrand);
      setInitialFilters(f => ({ ...f, brand: brandQuery }));
      setMobileFiltersOpen(true);
      navigate('/catalog', { replace: true });
    }
  }, [brandQuery, navigate]);

  const handleApplyFilters = (list) => {
    setLoading(true);
    setTimeout(() => {
      let result = [...list];
      if (sortValue === 'lowToHigh')      result.sort((a, b) => a.price - b.price);
      else if (sortValue === 'highToLow') result.sort((a, b) => b.price - a.price);
      setFilteredProducts(result);
      setVisibleCount(initialCount);
      setMobileFiltersOpen(false);
      setLoading(false);
    }, 1000);
  };

  const loadMore = () => {
    setVisibleCount(prev =>
      Math.min(prev + loadMoreCount, filteredProducts.length)
    );
  };

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(f => f !== id)
        : [...prev, id]
    );
  };

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[700px] overflow-hidden mb-8">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="/assets/Videos/watchcollection.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-center">
            Modern Watch Collection
          </h1>
          <p className="max-w-xl text-center text-sm md:text-base">
            Where timeless craftsmanship meets cutting-edge style. Explore our
            premium watch selection designed for every journey.
          </p>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-20 mb-40">
        {/* PAGE HEADING */}
        <div className="mb-6 md:mt-20 md:mb-20">
          <h2 className="text-xl md:text-2xl font-semibold mb-1">
            Curated Excellence
          </h2>
          <p className="text-gray-600 text-sm md:text-base md:mt-5">
            Explore the styles that define our legacy — bold, refined, and
            unmistakably iconic.
          </p>
        </div>

        {/* MOBILE FILTER BUTTON */}
        <div className="md:hidden flex items-center justify-end mb-4">
          <button
            onClick={() => setMobileFiltersOpen(o => !o)}
            className="inline-flex items-center space-x-1 px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800 transition"
          >
            <FaFilter />
            <span>Filter</span>
          </button>
        </div>

        {/* MOBILE FILTER PANEL */}
        {mobileFiltersOpen && (
          <div className="md:hidden absolute left-0 right-0 z-50 bg-white border border-gray-200 shadow-lg p-4">
            <Filters
              products={allProducts}
              onApplyFilters={handleApplyFilters}
              initialFilters={initialFilters}
            />
          </div>
        )}

        <div className="flex gap-8">
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-24 p-4 bg-white rounded-lg overflow-y-auto hide-scrollbar max-h-[calc(100vh-6rem)]">
              <h3 className="text-lg font-normal mb-4">Refine By</h3>
              <Filters
                products={allProducts}
                onApplyFilters={handleApplyFilters}
                initialFilters={initialFilters}
              />
            </div>
          </aside>

          {/* SORT + GRID */}
          <div className="flex-grow">
            {/* SORT & COUNT */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500">
                LUXWATCH
              </p>
              <div className="flex items-center space-x-2">
                <label htmlFor="sort" className="text-sm text-gray-500">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortValue}
                  onChange={handleSortChange}
                  className="hover:bg-gray-100 rounded-lg p-1 text-sm"
                >
                  <option value="popular">None</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* GRID + LOADING OVERLAY */}
            <div className="relative">
              {loading && (
                <div className="absolute inset-0 bg-white/75 flex items-center justify-center z-10">
                  <span className="text-lg font-medium">Loading…</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {visibleProducts.map(item => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden border border-transparent hover:border-2 hover:border-gray-600 rounded-lg"
                  >
                    {/* IMAGE */}
                    <div className="w-full h-[350px] bg-gray-100 relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* FAVORITE HEART */}
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className="absolute top-2 right-2 z-20 p-1 bg-white/75 rounded-full hover:bg-white transition"
                      >
                        {favorites.includes(item.id)
                          ? <FaHeart className="text-red-500" />
                          : <FaRegHeart className="text-gray-600" />}
                      </button>
                    </div>

                    {/* DETAILS */}
                    <div className="mt-3 px-4 pb-12 pt-4">
                      <h3 className="text-sm font-medium text-gray-800 line-clamp-1 mb-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center text-sm mb-2">
                        <span className="text-yellow-400">
                          {'★'.repeat(Math.floor(item.rating))}
                          {'☆'.repeat(5 - Math.floor(item.rating))}
                        </span>
                        <span className="ml-2 text-gray-500">
                          ({item.reviewCount})
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>

                    {/* SLIDE‑UP VIEW DETAILS */}
                    <div className="
                      absolute bottom-0 left-0 w-full
                      bg-gray-300 text-gray-700 text-center py-2
                      transform translate-y-full
                      group-hover:translate-y-0
                      transition-transform duration-300 ease-out
                    ">
                      <Link
                        to={`/product/${item.id}`}
                        className="font-bold hover:underline"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* LOAD MORE */}
              {visibleCount < filteredProducts.length && (
                <div className="flex justify-center mt-20">
                  <button
                    onClick={loadMore}
                    className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
