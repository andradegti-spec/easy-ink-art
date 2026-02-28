import { useEffect, useState, useCallback } from "react";

interface ExerciseCarouselProps {
  images: { src: string; title: string }[];
}

const ExerciseCarousel = ({ images }: ExerciseCarouselProps) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="relative w-full max-w-md md:max-w-4xl mx-auto px-2">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full flex-shrink-0 relative">
              <div className="absolute top-0 left-0 right-0 z-10 bg-foreground/70 py-2 px-3 md:py-3 md:px-4">
                <h3 className="text-sm md:text-2xl font-extrabold text-card text-center">
                  {img.title}
                </h3>
              </div>
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-contain max-h-[350px] md:max-h-[500px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
              i === current ? "bg-primary scale-125" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExerciseCarousel;
