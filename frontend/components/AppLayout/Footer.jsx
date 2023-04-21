import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className='bg-darker p-8'>
      <h6 className='text-center font-bold tracking-widest text-2xl'>LOGO</h6>
      <p className='text-center mt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam similique
        molestias aut omnis ea ratione molestiae veniam unde corrupti? Quasi
        accusantium tempora repellendus.
      </p>
      <ul className='flex items-center justify-center my-4'>
        <li className='mx-3'>
          <a href='#' className='hover:text-primary'>
            <FacebookIcon />
          </a>
        </li>
        <li className='mx-3'>
          <a href='#' className='hover:text-primary'>
            <TwitterIcon />
          </a>
        </li>
        <li className='mx-3'>
          <a href='#' className='hover:text-primary'>
            <TelegramIcon />
          </a>
        </li>
      </ul>
      <hr />
      <p className='mt-4 text-center'>
        Copyright &copy; Hasan Goli - {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
