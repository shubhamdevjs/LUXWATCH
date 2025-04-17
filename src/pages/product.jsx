// src/pages/ProductDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import SimilarWatches from '../Components/SimilarWataches/SimilarWatches';

const ProductD = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id, 10));
  const navigate = useNavigate();

  useEffect(() => {
  window.scrollTo(0, 0);
}, [product]);
  // Build an array of images for the gallery
  // If you only have one, fall back to that.
  const images = product?.images ?? [product?.image];
  const [mainImage, setMainImage] = useState(images[0] || '');
  useEffect(() => {
  setMainImage(images[0] || '');
}, [product]);


  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold">Product not found.</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        > 
          ← Back
        </button>
      </div>
    );
  }

  return (
    
    <div className="max-w-screen-2xl mx-auto px-20 py-8 pt-10">
      {/* Back Link */}
          <div className="mb-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-block text-lg text-gray-600 hover:underline"
          >
            ← Back
          </button>
        </div>
      <div className="flex flex-col lg:flex-row gap-[70px]">
        {/*                    THUMBNAILS + MAIN IMAGE */}
        <div className="w-full lg:w-1/2">
            {/* Main Image */}
           <div className="h-5/6 border rounded-md overflow-hidden shadow-sm">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

              {/* Thumbnails: horizontal row */}
            <div className="flex space-x-5 mt-10">
                {images.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMainImage(src)}
                      className={`w-20 h-20 border rounded overflow-hidden cursor-pointer focus:outline-none ${
                      mainImage === src ? 'ring-2 ring-blue-600' : ''
                      }`}
                     >
                         <img
                            src={src}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                    </button>
                     ))}
                </div>
            </div>

        {/*                    DETAILS */}
        <div className="flex-1 space-y-6">
          {/* Title & Brand/Category */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-sm text-gray-500 mt-1">
              {product.brand} • {product.category}
            </p>
          </div>

          {/* Price & Rating */}
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              ${product.price} <span className="text-base text-gray-600">{product.currency}</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-400 mr-2">
                {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
              </span>
              <span className="text-sm text-gray-600">({product.reviewCount} reviews)</span>
            </div>
          </div>

          {/* At a Glance */}
          <div>
            <h3 className="text-lg font-semibold mb-2">At a Glance</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 p-3 rounded text-center">
                <p className="text-xs text-gray-500">Brand</p>
                <p className="font-medium text-gray-800">{product.brand}</p>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center">
                <p className="text-xs text-gray-500">Color</p>
                <p className="font-medium text-gray-800">{product.color}</p>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center">
                <p className="text-xs text-gray-500">Material</p>
                <p className="font-medium text-gray-800">{product.technicalSpecifications.material}</p>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center">
                <p className="text-xs text-gray-500">Display Size</p>
                <p className="font-medium text-gray-800">{product.technicalSpecifications.displaySize}</p>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center">
                <p className="text-xs text-gray-500">Movement</p>
                <p className="font-medium text-gray-800">{product.technicalSpecifications.movement}</p>
              </div>
            </div>
          </div>

          {/* About this item */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About this item</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">{product.description}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>{product.features}</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition">
              Buy Now
            </button>
          </div>

          
        </div>
        
      </div>
      {/* Similar Watches Section */}
     <SimilarWatches
        products={products}
        currentProductId={product.id}
        brand={product.brand}
     />
      
    </div>
  );
};

export default ProductD;
