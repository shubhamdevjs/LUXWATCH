import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { products }     from '../data/products';
import { Link }         from 'react-router-dom';

export default function FavouritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const favItems = products.filter(p => favorites.includes(p.id));

  if (favItems.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">No items in your shopping bag yet</h2>
        <p className="mt-2 text-gray-600">
          Browse our <Link to="/catalog" className="underline">catalog</Link> and shop to add.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-20">
      <h1 className="text-3xl font-bold mb-8">Your Favourites</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {favItems.map(item => (
          <div key={item.id} className="border rounded-lg overflow-hidden">
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.name}
                   className="w-full h-48 object-cover" />
            </Link>
            <div className="p-4">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
              <button
                onClick={() => toggleFavorite(item.id)}
                className="mt-2 text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
