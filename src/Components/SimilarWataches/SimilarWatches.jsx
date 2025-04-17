// src/components/SimilarWatches.jsx
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // optional: any icon lib

const SimilarWatches = ({ products, currentProductId, brand, maxItems = 10 }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const similar = products
    .filter(p => p.brand === brand && p.id !== currentProductId)
    .slice(0, maxItems);

  if (similar.length === 0) return null;

  const scroll = (offset) => {
    scrollRef.current.scrollBy({
      left: offset,
      behavior: 'smooth',
    });
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate(`/product/${id}`);
      window.scrollTo(0, 0);
    }, 400);
  };

  return (
    <>
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <p className="text-xl font-semibold">Loading…</p>
        </div>
      )}

      <section className="mt-16 pt-20">
        <h2 className="text-2xl font-semibold mb-4">Similar Watches</h2>

        <div className="relative pb-40 pt-20">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll(-300)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-2 py-1 rounded-full"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Watch Cards Container */}
          <div
            ref={scrollRef}
            className="flex w-full h-full overflow-x-hidden space-x-20"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {similar.map(w => (
              <Link
                key={w.id}
                to={`/product/${w.id}`}
                onClick={(e) => handleClick(e, w.id)}
                className="flex-shrink-0 w-80  rounded-lg hover:shadow-lg transition scroll-snap-align-start"
              >
                <div className="w-full h-64 bg-gray-100 rounded-t overflow-hidden mb-2">
                  <img
                    src={w.image}
                    alt={w.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium line-clamp-2">{w.name}</h3>
                <p className="text-sm text-gray-600">${w.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll(300)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-2 py-1 rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
};

export default SimilarWatches;
