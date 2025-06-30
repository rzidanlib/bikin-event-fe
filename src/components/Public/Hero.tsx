"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  { id: 1, image: "banner-1.jpg", alt: "banner-1" },
  { id: 2, image: "banner-2.jpg", alt: "banner-2" },
  { id: 3, image: "banner-3.jpg", alt: "banner-3" },
  { id: 4, image: "banner-4.jpg", alt: "banner-4" },
];

const Hero = () => {
  const [currentSlide, setCurrenSlide] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  // Duplicate slides
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  // Auto slides function
  useEffect(() => {
    if (!isHovered && !isTransitioning) {
      const interval = setInterval(() => {
        gotToNext();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, isTransitioning]);

  // Infinite loop transitions
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (currentSlide === 0) {
          setCurrenSlide(slides.length);
        } else if (currentSlide === slides.length + 1) {
          setCurrenSlide(1);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isTransitioning]);

  const gotToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrenSlide((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrenSlide((prev) => prev - 1);
    }
  };

  const gotToSlide = (index: number) => {
    if (!isTransitioning) {
      setCurrenSlide(index + 1);
    }
  };

  const getCurrentSlideIndex = () => {
    if (currentSlide === 0) return slides.length - 1;
    if (currentSlide === slides.length + 1) return 0;
    return currentSlide - 1;
  };

  return (
    <div
      className="relative w-full h-[400px] md-h-[500px] overflow-hidden rounded-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={slideRef}
        className={`flex h-full ${
          isTransitioning ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: !isTransitioning ? "none" : undefined,
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            className="min-w-full h-full relative bg-gray-100"
            key={`${slide.id}-${index}`}
          >
            <Image
              src={`/banners/${slide.image}`}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index <= 2}
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={goToPrevious}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 backdrop-blur-sm disabled:opacity-50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={gotToNext}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 backdrop-blur-sm disabled:opacity-50"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => gotToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-300 disabled:opacity-50 ${
              index === getCurrentSlideIndex()
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
