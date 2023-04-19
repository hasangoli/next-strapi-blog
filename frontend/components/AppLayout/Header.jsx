import Link from 'next/link';
import ImageProvider from '../Global/ImageProvider';

const Header = () => {
  return (
    <header className='bg-black text-primary'>
      <div className='container py-2 px-3 sm:px-0'>
        <div className='flex flex-row items-center justify-between w-full'>
          <div>
            <h1>BLOG</h1>
          </div>
          <nav className='fixed left-0 top-0 bg-dark w-full h-full z-10'>
            <ul className='flex flex-col'>
              <li className='mx-2'>
                <Link href='/'>Home</Link>
              </li>
              <li className='mx-2'>
                <Link href='/blogs'>Blogs</Link>
              </li>
              <li className='mx-2'>
                <Link href='/categories'>Categories</Link>
              </li>
              <li className='mx-2'>
                <Link href='/about'>About Us</Link>
              </li>
            </ul>
          </nav>
          <div>
            <ImageProvider
              src='/assets/images/blog/09.jpg'
              alt=''
              width={'2.5rem'}
              aspectRatio={1}
              className={'rounded-full overflow-hidden'}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
