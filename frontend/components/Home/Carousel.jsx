import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import ImageProvider from '../Global/ImageProvider';

const Carousel = ({ slides }) => {
  const articles = useSelector(state => state.articles);
  console.log('Store Articles', articles);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 3000,
      stopOnMouseEnter: true,
      rootNode: emblaRoot => emblaRoot.parentElement,
    }),
  ]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className='relative'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {slides?.map((item, i) => (
            <div key={i} className='flex-[0_0_100%] min-w-0'>
              <ImageProvider
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.attributes?.cover?.data?.attributes?.url}`}
                width={'100%'}
                aspectRatio={16 / 8}
                alt=''
                className={'max-h-[500px]'}
              />
            </div>
          ))}
        </div>
      </div>
      <ArrowCircleLeftOutlinedIcon
        onClick={scrollPrev}
        className='absolute top-1/2 -translate-y-1/2 start-4 cursor-pointer hover:text-primary text-4xl'
      />
      <ArrowCircleRightOutlinedIcon
        onClick={scrollNext}
        className='absolute top-1/2 -translate-y-1/2 end-4 cursor-pointer hover:text-primary text-4xl'
      />
    </section>
  );
};

export default Carousel;
