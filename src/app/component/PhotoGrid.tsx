"use client"
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import PhotoItem, { ItemType } from './PhotoItem';

interface PhotoGridProps {
  images: ItemType[];
  columns?: 2 | 3 | 4 | 5 | 6;
  gap?: string;     
  className?: string;
  imageClassName?: string;
  onClick?: (img: ItemType) => void;
}


const getGridCols = (columns: number) => {
  switch (columns) {
    case 2: return 'grid-cols-1 md:grid-cols-2';
    case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    case 5: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5';
    case 6: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6';
    default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  }
};

const getWideVariantClass = (columns: number) => {
  switch (columns) {
    case 2: return 'col-span-2 md:col-span-2';
    case 3: return 'col-span-2 md:col-span-2 lg:col-span-2';
    case 4: return 'col-span-2 md:col-span-2 lg:col-span-2';
    case 5: return 'col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2';
    case 6: return 'col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2';
    default: return 'col-span-2 md:col-span-2 lg:col-span-2';
  }
};

const PhotoGrid: React.FC<PhotoGridProps> = ({
  images,
  columns = 3,
  gap = '4',
  className = '',
  imageClassName = '',
  onClick
}) => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  // Calculate items per line based on columns
  const getItemsPerLine = (cols: number) => {
    switch (cols) {
      case 2: return 2;
      case 3: return 3;
      case 4: return 4;
      case 5: return 5;
      case 6: return 6;
      default: return 3;
    }
  };

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const itemsPerLine = getItemsPerLine(columns);
  const maxVisibleItems = isMobile ? itemsPerLine * 1 : itemsPerLine * 3; 
  const hasMoreItems = images.length > maxVisibleItems;
  const visibleImages = showAll ? images : images.slice(0, maxVisibleItems);

  // Separate videos and images
  const videos = visibleImages.filter(img => img.variant === 'youtube' || img.variant === 'wide');
  const imagesOnly = visibleImages.filter(img => img.variant !== 'youtube' && img.variant !== 'wide');

  return (
    <div className="space-y-4">

      {/* Images Grid - Original layout */}
      {imagesOnly.length > 0 && (
        <div className={`grid ${getGridCols(columns)} gap-${gap} ${className}`} style={{ gridAutoRows: 'minmax(0, 1fr)' }}>
          {imagesOnly.map((image, index) => {
            // Check if this is a wide image that should start on a new line
            const isWide = image.variant === 'wide';
            const shouldStartNewLine = isWide && (index % itemsPerLine !== 0);

            return (
              <button
                key={`image-${index}`}
                type="button"
                onClick={() => onClick?.(image)}
                className={`relative overflow-hidden h-80 ${imageClassName} ${onClick ? 'cursor-pointer' : ''
                  } ${image.variant === 'wide' ? getWideVariantClass(columns) : ''
                  } ${shouldStartNewLine ? 'col-start-1' : ''}`}
                style={shouldStartNewLine ? { gridColumn: '1 / -1' } : {}}
              >
                <PhotoItem image={image} />
              </button>
            );
          })}
        </div>
      )}

      {/* Videos Grid - 2 per line */}
      {videos.length > 0 && (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-${gap} ${className}`} style={{ gridAutoRows: 'minmax(0, 1fr)' }}>
          {videos.map((video, index) => (
            <button
              key={`video-${index}`}
              type="button"
              onClick={() => onClick?.(video)}
              className={`relative overflow-hidden h-80 ${imageClassName} ${onClick ? 'cursor-pointer' : ''}`}
            >
              <PhotoItem image={video} />
            </button>
          ))}
        </div>
      )}

      {hasMoreItems && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="px-2 py-1 bg-[#C9B18B] mt-[-32px] mb-[32px] md:mt-0 md:mb-0 text-white rounded-lg transition-colors duration-200 font-medium cursor-pointer"
          >
            {showAll ? t('gallery.showLess') : `${t('gallery.showMore')} (${images.length - maxVisibleItems} ${t('gallery.moreItems')})`}
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGrid; 