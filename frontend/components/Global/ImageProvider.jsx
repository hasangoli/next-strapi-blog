import Image from 'next/image';

const ImageProvider = ({
  src,
  alt,
  width,
  aspectRatio,
  quality = 100,
  priority = false,
  className,
  height = 'auto',
}) => {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: width, aspectRatio: aspectRatio, height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={quality}
        priority={priority}
        className='object-cover object-center'
      />
    </div>
  );
};

export default ImageProvider;
