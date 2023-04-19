import Image from 'next/image';

const ImageProvider = ({
  src,
  alt,
  width,
  aspectRatio,
  quality = 100,
  priority = false,
  className,
}) => {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: width, aspectRatio: aspectRatio }}
    >
      <Image src={src} alt={alt} fill quality={quality} priority={priority} />
    </div>
  );
};

export default ImageProvider;
