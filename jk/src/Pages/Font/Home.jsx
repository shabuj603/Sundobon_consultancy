import React from 'react'
import { useState } from "react";

const images = [
  "https://source.unsplash.com/random/800x300?nature,1",
  "https://source.unsplash.com/random/800x300?nature,2",
  "https://source.unsplash.com/random/800x300?nature,3",
];
function Home() {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div><div class="grid grid-cols-2 gap-4">
      <div>01000000000000000</div>
      <div>
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <img
            src={images[current]}
            alt={`Slide ${current}`}
            className="w-full h-64 object-cover transition-all duration-500"
          />

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded-r"
          >
            ◀
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded-l"
          >
            ▶
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${current === idx ? "bg-white" : "bg-gray-400"
                  }`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
      </div>

    </div></div>
  )
}

export default Home