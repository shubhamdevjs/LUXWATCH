// src/components/Filters.jsx
import React, { useState, useEffect } from 'react';
import '../../index.css'; // Import your Tailwind CSS styles

const Filters = ({ products, onApplyFilters, initialFilters = { priceRange: '', brand: '', color: '', category: '' } }) => {
  // States for filters
  const [priceRange, setPriceRange] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    setPriceRange(initialFilters.priceRange || '');
    setBrand     (initialFilters.brand      || '');
    setColor     (initialFilters.color      || '');
    setCategory  (initialFilters.category   || '');
  }, [
    initialFilters.priceRange,
    initialFilters.brand,
    initialFilters.color,
    initialFilters.category
  ]);

   // 2) Auto‑open any accordion that has a pre‑selected value
   useEffect(() => {
      if (initialFilters.priceRange)   setShowPrice(true);
      if (initialFilters.brand)        setShowBrand(true);
      if (initialFilters.color)        setShowColor(true);
      if (initialFilters.category)     setShowCategory(true);
 }, [
   initialFilters.priceRange,
   initialFilters.brand,
   initialFilters.color,
   initialFilters.category,
 ]);


  // Accordion toggles
  const [showPrice, setShowPrice] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  // Apply filters
  const applyFilters = () => {
    let filtered = [...products];
    if (priceRange === 'below5000') filtered = filtered.filter(p => p.price < 5000);
    else if (priceRange === '5000to10000') filtered = filtered.filter(p => p.price >= 5000 && p.price <= 10000);
    else if (priceRange === 'above10000') filtered = filtered.filter(p => p.price > 10000);

    if (brand) filtered = filtered.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
    if (color) filtered = filtered.filter(p => p.color.toLowerCase() === color.toLowerCase());
    if (category) filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());

    onApplyFilters(filtered);
  };

  // Reset
  const clearFilters = () => {
    setPriceRange('');
    setBrand('');
    setColor('');
    setCategory('');
    onApplyFilters(products);
  };

  return (
    <div className="flex flex-col h-full text-sm text-gray-700">
      {/* Scrollable sections */}
      <div className="flex-grow overflow-y-auto hide-scrollbar pr-2">
        {/* PRICE */}
        <div className="border-t border-gray-300 py-3">
          <button
            onClick={() => setShowPrice(!showPrice)}
            className="flex w-full items-center justify-between font-medium uppercase"
          >
            <span>Price</span>
            <span>{showPrice ? '–' : '+'}</span>
          </button>
          {showPrice && (
            <div className="mt-2 ml-2 space-y-2">
              {[
                ['', 'All'],
                ['below5000', 'Below $5000'],
                ['5000to10000', '$5000–$10000'],
                ['above10000', 'Above $10000']
              ].map(([val, label]) => (
                <label key={val} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="price"
                    value={val}
                    checked={priceRange === val}
                    onChange={e => setPriceRange(e.target.value)}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* BRAND */}
        <div className="border-t border-gray-300 py-3">
          <button
            onClick={() => setShowBrand(!showBrand)}
            className="flex w-full items-center justify-between font-medium uppercase"
          >
            <span>Brand</span>
            <span>{showBrand ? '–' : '+'}</span>
          </button>
          {showBrand && (
            <div className="mt-2 ml-2 space-y-2">
              {['', 'Omega','Rolex','Tag Heuer','Audemars Piguet','Cartier','Hublot','Casio','Patek Philippe']
                .map((val) => (
                  <label key={val} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="brand"
                      value={val}
                      checked={brand === val}
                      onChange={e => setBrand(e.target.value)}
                    />
                    <span>{val || 'All'}</span>
                  </label>
                ))}
            </div>
          )}
        </div>

        {/* COLOR */}
        <div className="border-t border-gray-300 py-3">
          <button
            onClick={() => setShowColor(!showColor)}
            className="flex w-full items-center justify-between font-medium uppercase"
          >
            <span>Color</span>
            <span>{showColor ? '–' : '+'}</span>
          </button>
          {showColor && (
            <div className="mt-2 ml-2 space-y-2">
              {['', 'black','silver','gold'].map((val) => (
                <label key={val} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="color"
                    value={val}
                    checked={color === val}
                    onChange={e => setColor(e.target.value)}
                  />
                  <span>{val || 'All'}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* CATEGORY */}
        <div className="border-t border-gray-300 py-3">
          <button
            onClick={() => setShowCategory(!showCategory)}
            className="flex w-full items-center justify-between font-medium uppercase"
          >
            <span>Category</span>
            <span>{showCategory ? '–' : '+'}</span>
          </button>
          {showCategory && (
            <div className="mt-2 ml-2 space-y-2">
              {['', 'men','women','unisex'].map((val) => (
                <label key={val} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="category"
                    value={val}
                    checked={category === val}
                    onChange={e => setCategory(e.target.value)}
                  />
                  <span>{val || 'All'}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Apply / Clear */}
      <div className=" pt-4 mt-4">
        <button
          onClick={applyFilters}
          className="w-full py-2 border-2 border-black font-medium hover:bg-black hover:text-white transition mb-2"
        >
          Apply
        </button>
        <button
          onClick={clearFilters}
          className="w-full py-2 bg-gray-300 font-medium hover:bg-gray-400 transition"
        >
          Clear Selection
        </button>
      </div>
    </div>
  );
};

export default Filters;
