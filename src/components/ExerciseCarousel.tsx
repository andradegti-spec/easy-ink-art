interface ExerciseCarouselProps {
  images: { src: string; title: string }[];
}

const ExerciseCarousel = ({ images }: ExerciseCarouselProps) => {
  return (
    <div className="flex flex-col gap-6 max-w-md md:max-w-lg mx-auto">
      {images.map((img, i) => (
        <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={img.src}
            alt={`Atividade ${i + 1}`}
            className="w-full object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ExerciseCarousel;
