import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import './Home.css';

const pages = ['Help','Account'];

const Home = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
  return (
    <>
    <div id="overlay"></div>
    <div className="homePage">
        <AppBar color="transparent" elevation={0}>
            <Container maxWidth="lg">
            <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1}}>
                    <img src="/images/logo.png" alt="Logo" />
                </Box>
                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'white', display: 'block' }}
                    >
                    {page}
                    </Button>
                ))}
                </Box>
                <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={''}
                        sx={{color: 'white'}}
                    >
                        <LocalMallOutlinedIcon/>
                    </IconButton>
                <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        sx={{color: 'white'}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
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
                        sx={{
                        display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
    </div>
    </>
  )
}

export default Home