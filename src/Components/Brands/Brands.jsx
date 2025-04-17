// src/components/ExploreBrandsSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
const brands = [
  {
    id: 1,
    name: 'Casio ',
    description: `Known as “the watchmaker’s watchmaker”
Supplies movements to brands like Patek & AP
Famous models: Reverso, Master Ultra Thin`,
    image: '/assets/images/jaeger.jpg', // Ensure this image exists in public/assets/images/
  },
  {
    id: 2,
    name: 'Omega',
    image: '/assets/Images/omega.jpg',
  },
  {
    id: 3,
    name: 'Tag Heuer',
    image: '/assets/Images/heuer2.jpg',
  },
  {
    id: 4,
    name: 'Hublot ',
    image: '/assets/images/hublot.jpg',
  },
  {
    id: 5,
    name: 'Cartier',
    image: '/assets/images/breitling.jpg',
  },
  {
    id: 6,
    name: ' Patek Philippe',
    image: '/assets/Images/patek-philippe-nautilus.jpeg',
  },
];

const ExploreBrandsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 px-4 md:px-16 md:pt-60">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif ">Explore Brands</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-40 md:px-20">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className=""
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-2/3 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 md:flex justify-center">{brand.name}</h3>
            {/* <p className="text-gray-700 whitespace-pre-line">
              {brand.description}
            </p> */}
                <div className='flex justify-center'>
                    <button
              className="mt-4 px-6 py-2 border border-gray-700 text-gray-700 rounded-full hover:bg-gray-700 hover:text-white transition duration-300"
              onClick={() =>
                  navigate(`/catalog?brand=${encodeURIComponent(brand.name)}`)
                }
              >
              Shop Now
            </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreBrandsSection;
