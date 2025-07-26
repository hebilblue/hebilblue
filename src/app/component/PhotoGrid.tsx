import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface PhotoGridProps {
  images: {
    src: string | StaticImageData;
    alt: string;
    width?: number;
    height?: number;
    variant?: 'normal' | 'wide' | 'youtube'; // Add YouTube variant support
  }[];
  columns?: 2 | 3 | 4 | 5 | 6;
  gap?: string;     
  className?: string;
  imageClassName?: string;
  onClick?: (index: number) => void;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({
  images,
  columns = 3,
  gap = '4',
  className = '',
  imageClassName = '',
  onClick
}) => {
  const getGridCols = () => {
    switch (columns) {
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      case 5: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5';
      case 6: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const getWideVariantClass = () => {
    switch (columns) {
      case 2: return 'col-span-2 md:col-span-2';
      case 3: return 'col-span-2 md:col-span-2 lg:col-span-2';
      case 4: return 'col-span-2 md:col-span-2 lg:col-span-2';
      case 5: return 'col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2';
      case 6: return 'col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2';
      default: return 'col-span-2 md:col-span-2 lg:col-span-2';
    }
  };

  const getYouTubeEmbedUrl = (url: string) => {
    // Extract video ID from YouTube URL
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // Return original URL if no video ID found
  };

  return (
    <div className={`grid ${getGridCols()} gap-${gap} ${className}`} style={{ gridAutoRows: 'minmax(0, 1fr)' }}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative overflow-hidden h-80 ${imageClassName} ${
            onClick ? 'cursor-pointer' : ''
          } ${
            image.variant === 'wide' ? getWideVariantClass() : ''
          }`}
          onClick={() => onClick?.(index)}
        >
          {image.variant === 'youtube' ? (
            <iframe
              src={getYouTubeEmbedUrl(image.src as string)}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title={image.alt}
            />
          ) : image.variant === 'wide' ? (
            <iframe
              src={image.src as string}
              className="w-full h-full object-cover"
              title={image.alt}
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          ) : (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
          )}
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid; 