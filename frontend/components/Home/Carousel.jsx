import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import axios from 'axios';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import ImageProvider from '../Global/ImageProvider';

const Carousel = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      axios(`${process.env.NEXT_PUBLIC_API_URL}/articles?populate=cover`)
        .then(res => res.data)
        .then(data => setSlides(data?.data?.slice(0, 3)))
        .catch(err => console.log(err));
    };

    getArticles();
  }, []);

  console.log(slides);

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
            <Link
              href={'#'}
              key={i}
              className='relative flex-[0_0_100%] min-w-0'
            >
              <ImageProvider
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.attributes?.cover?.data?.attributes?.url}`}
                width={'100%'}
                aspectRatio={16 / 8}
                alt=''
                className={'max-h-[500px]'}
              />
              <div className='absolute bottom-8 left-[50%] translate-x-[-50%] p-4 bg-darker/70 rounded-lg text-center'>
                <h3 className='mb-2 md:text-2xl'>{item?.attributes?.title}</h3>
                <p className='hidden sm:block'>
                  {item?.attributes?.description}
                </p>
              </div>
            </Link>
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
