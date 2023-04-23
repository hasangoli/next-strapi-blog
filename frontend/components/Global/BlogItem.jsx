import PersonIcon from '@mui/icons-material/Person';
import Button from './Button';
import ImageProvider from './ImageProvider';

const BlogItem = ({ item }) => {
  return (
    <div className='bg-darker p-3 rounded-md group'>
      <div className='relative'>
        <ImageProvider
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.attributes?.cover?.data?.attributes?.url}`}
          width={'100%'}
          aspectRatio={16 / 11}
          alt=''
          className='rounded-md overflow-hidden mb-4 group-hover:opacity-50 transition-all duration-200'
        />
        <Button
          title={'Read More'}
          href='#'
          className='absolute bottom-0 left-[50%] translate-x-[-50%] opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:bottom-[40%]'
        />
      </div>
      <div className='flex items-center justify-start'>
        <PersonIcon className='text-sm me-1' />
        <span>{item?.attributes?.author?.data?.attributes?.name}</span>
        <div className='w-[2px] h-4 mx-2 bg-white'></div>
        <small>
          {new Date(item?.attributes?.createdAt).toLocaleDateString('en-US')}
        </small>
      </div>
      <h2 className='line-clamp-1 text-xl'>{item?.attributes?.title}</h2>
      <p className='line-clamp-2 mt-3'>{item?.attributes?.description}</p>
    </div>
  );
};

export default BlogItem;
