import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useState } from 'react';
import ImageProvider from '../Global/ImageProvider';

const Header = () => {
  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Blogs', href: '/blogs' },
    { title: 'Categories', href: '/categories' },
    { title: 'Authors', href: '/authors' },
    { title: 'Contact Us', href: '/contact' },
    { title: 'About Us', href: '/about' },
  ];

  const userItems = [
    { title: 'Profile', href: '/dashboard' },
    { title: 'Add Post', href: '/dashboard/posts/create' },
    { title: 'Logout', href: '/logout' },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='sticky' className='bg-darker'>
      <div className='container'>
        <Toolbar>
          <h6 className='hidden md:flex me-8 font-bold tracking-widest uppercase text-2xl'>
            Blog
          </h6>

          <Box className='flex md:hidden'>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menuAppBar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menuAppBar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className='md:none'
            >
              {menuItems.map((item, i) => (
                <MenuItem key={i}>
                  <Link href={item?.href}>
                    <Typography textAlign='center'>{item?.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            className='flex md:hidden font-bold mx-auto tracking-widest'
          >
            LOGO
          </Typography>
          <Box className='hidden md:flex flex-grow'>
            {menuItems.map((item, i) => (
              <Link key={i} href={item?.href} className='mx-2 text-white block'>
                {item?.title}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <ImageProvider
                  src='/assets/images/blog/09.jpg'
                  alt=''
                  width={'2.5rem'}
                  aspectRatio={1}
                  className={'rounded-full overflow-hidden'}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menuAppBar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userItems.map((item, i) => (
                <MenuItem key={i}>
                  <Link href={item?.href}>
                    <Typography textAlign='center'>{item?.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  );
};
export default Header;
