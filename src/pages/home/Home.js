import React, { useState } from 'react';
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
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Home.css';

const pages = ['Help','Account'];

const Home = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
  
    const handleOpenNavMenu = (event) => {
        console.log(event.currentTarget);
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    function HideOnScroll(props) {
        const { children, window } = props;

        const trigger = useScrollTrigger({
          target: window ? window() : undefined,
        });
      
        return (
          <Slide appear={false} direction="down" in={!trigger}>
            {children}
          </Slide>
        );
      }
  
  return (
    <div className="home">
        <div className="home-section1">
            <div id="overlay">
                <Container maxWidth="lg">
                    <div id="text">
                        <h1 id="main-text">Cari Cari</h1>
                        <p id="main-p">Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
                    </div>
                    <div className="elements">
                        <Grid container className="container" columnSpacing={1}>
                            {[0, 1, 2, 3].map((value) => (
                                <Grid key={value} item xs={3}>
                                    <div className="element">
                                        <div className="element1">
                                            <div className="labelPlusIcon">
                                                <div className="icon">
                                                    <FavoriteBorderIcon/>
                                                </div>
                                                <div className="count">
                                                    0
                                                </div>
                                                <div className="label">
                                                    Label{value}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </Container>
            </div>
            <div className="home-bg">
                <HideOnScroll>
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
                                            // onClick={handleCloseNavMenu}
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
                                        <MenuIcon/>
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
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
                </HideOnScroll>
            </div>
        </div>
        <div id="body">
            <Container maxWidth="lg">
                <div className="One">
                    <div className="header">
                        <div>
                            <div className="title">
                                Upcoming Shows
                            </div>
                            <div className="underLine"></div>
                        </div>
                        <div className="ViewAll">View All</div>
                    </div>
                    <Grid container justifyContent="center" spacing={3} className="shows" maxWidth="lg">
                        {[0, 1, 2, 3].map((value) => (
                            <Grid key={value} item xs={3}>
                                <div className="shadow">
                                    <div className="show">
                                        <img className="showImg" src={`/images/show${value+1}.png`} alt={`Show${value+1}`} />
                                        <div className="showLabel">
                                            Folk
                                        </div>
                                        <div className="showStar">
                                            Benny Dayal
                                        </div>
                                        <div className="moreInfo">
                                            More Info <ArrowForwardIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className="horiz"></div><ConfirmationNumberIcon/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>

                </div>
                <div className="Reviews">
                <div className="header">
                        <div>
                            <div className="title">
                                Reviews
                            </div>
                            <div className="underLine"></div>
                        </div>
                        <div className="ViewAll">View All</div>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Home