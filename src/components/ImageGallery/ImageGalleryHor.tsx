import React, { useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface ImageGalleryHorProps {
  images: GalleryImage[];
}

const ImageGalleryHor: React.FC<ImageGalleryHorProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      <div className="relative flex items-center bg-slate-100 rounded-lg overflow-hidden shadow-lg">
        <button 
          className="bg-black/50 text-white text-2xl px-4 py-16 cursor-pointer hover:bg-black/70 transition-colors min-w-[50px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          ❮
        </button>
        
        <div className="flex-1 relative min-h-[300px] flex items-center justify-center">
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt}
            className="max-w-full max-h-96 w-auto h-auto object-contain rounded"
          />
          {images[currentIndex].title && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center font-medium">
              {images[currentIndex].title}
            </div>
          )}
        </div>
        
        <button 
          className="bg-black/50 text-white text-2xl px-4 py-16 cursor-pointer hover:bg-black/70 transition-colors min-w-[50px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
          onClick={goToNext}
          aria-label="Next image"
        >
          ❯
        </button>
      </div>
      
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-colors ${
              index === currentIndex 
                ? 'bg-blue-500' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryHor;
