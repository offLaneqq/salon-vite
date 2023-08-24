// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useState } from "react";

function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [current, setCurrent] = useState(0);
  const prev = () => {
    // eslint-disable-next-line react/prop-types
    setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    // eslint-disable-next-line react/prop-types
    setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if(!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform easy-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 text-gray-800">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white bg-opacity-50 hover:bg-white"
        >
          <ChevronLeft size={50} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white bg-opacity-50 hover:bg-white"
        >
          <ChevronRight size={50} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center gap-2 justify-center">
          {
            // eslint-disable-next-line react/prop-types
            slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-3 h-3 bg-white rounded-full ${
                  current === i ? "p-3" : "bg-opacity-50"
                }`}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Carousel;
