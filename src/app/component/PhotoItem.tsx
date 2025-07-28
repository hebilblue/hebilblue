import Image, { StaticImageData } from "next/image";

export type ItemType = {
    src: string | StaticImageData;
    alt: string;
    width?: number;
    height?: number;
    variant?: "normal" | "wide" | "youtube";
  }
  
const getYouTubeEmbedUrl = (url: string) => {
    // Extract video ID from YouTube URL
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // Return original URL if no video ID found
  };
  
  const PhotoItem = ({ image }: { image: ItemType }) => {
    return (
      image.variant === "youtube" ? (
        <iframe
          src={getYouTubeEmbedUrl(image.src as string)}
          className="w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title={image.alt}
        />
      ) : image.variant === "wide" ? (
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
          className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )
    )
  }

    export default PhotoItem;