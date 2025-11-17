import React, { useState } from 'react';
import ImageZoomModal from '../ImageZoom/ImageZoomModal';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  cardGridStyle?: React.CSSProperties;
  cardWidth?: string;
  gap?: string;
  cardBgColor?: string;
  onImageClick?: (img: GalleryImage) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  cardGridStyle,
  cardWidth = '300px',
  gap = 'gap-6',
  cardBgColor = 'bg-gray-800/40',
  onImageClick
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image: GalleryImage) => {
    if (onImageClick) {
      onImageClick(image);
    } else {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const defaultGridStyle = {
    '--cardWidth': cardWidth,
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, var(--cardWidth)), 1fr))'
  } as React.CSSProperties;

  const finalGridStyle = cardGridStyle || defaultGridStyle;

  return (
    <>
      <div className={`grid ${gap}`} style={finalGridStyle}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`${cardBgColor} rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 relative cursor-pointer`}
            onClick={() => handleImageClick(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-36 object-cover"
              onError={(e) => {
                console.error('Image failed to load:', image.src);
                e.currentTarget.style.display = 'none';
              }}
            />
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-3">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
              </div>
            )}
          </div>
        )
        
        )}
      </div>
      
      {!onImageClick && (
        <ImageZoomModal 
          src={selectedImage?.src || ''}
          alt={selectedImage?.alt || ''}
          open={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ImageGallery;
export type { GalleryImage };