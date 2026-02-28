interface ExerciseCarouselProps {
  images: { src: string; title: string }[];
}

const ExerciseCarousel = ({ images }: ExerciseCarouselProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {images.map((img, i) => (
        <div key={i} className="rounded-2xl overflow-hidden shadow-lg bg-card">
          <img
            src={img.src}
            alt={img.title}
            className="w-full object-contain"
            loading="lazy"
          />
          <p className="text-sm font-bold text-foreground py-2 px-3 text-center">{img.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ExerciseCarousel;
