"use client"
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

  const itemsPerLine = getItemsPerLine(columns);
  const maxVisibleItems = itemsPerLine * 3; // 3 lines
  const hasMoreItems = images.length > maxVisibleItems;
  const visibleImages = showAll ? images : images.slice(0, maxVisibleItems);

  return (
    <div className="space-y-4">
      <div className={`grid ${getGridCols(columns)} gap-${gap} ${className}`} style={{ gridAutoRows: 'minmax(0, 1fr)' }}>
        {visibleImages.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onClick?.(image)}
            className={`relative overflow-hidden h-80 ${imageClassName} ${onClick ? 'cursor-pointer' : ''
              } ${image.variant === 'wide' ? getWideVariantClass(columns) : ''
              }`}
          >
            <PhotoItem image={image} />
          </button>
        ))}
      </div>

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