import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
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
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import './Home.css';

const pages = ['Help','Account'];

const Home = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const shows = [
        {
            img: '/images/show1.png',
            genre: 'Folk',
            performer: 'Benny Dayal',
            info: '/',
            tickets: '/'
        },
        {
            img: '/images/show2.png',
            genre: 'Bollywood',
            performer: 'Vijay Yesudas',
            info: '/',
            tickets: '/'
        },
        {
            img: '/images/show3.png',
            genre: 'Folk',
            performer: 'Andrea Jeremiah',
            info: '/',
            tickets: '/'
        },
        {
            img: '/images/show4.png',
            genre: 'Folk',
            performer: 'Shilpa Rao',
            info: '/',
            tickets: '/'
        }
    ]

    const reviews = [
        {
            img: '/images/profile1.png',
            from: 'Hellen Jummy',
            location: 'Palo Alto, CA',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. ',
        },
        {
            img: '/images/profile2.png',
            from: 'Isaac Oluwatemilorun',
            location: 'Palo Alto, CA',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. ',
        },
        {
            img: '/images/profile3.png',
            from: 'Hellen Jummy',
            location: 'Palo Alto, CA',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. ',
        }
    ]
  
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

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '105%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('lg')]: {
            height: '100%',
        },
    }));
      
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'white',
        '& .MuiInputBase-input': {
            '&::placeholder': {
                opacity: 1,
            },
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '0ch',
            '&:focus': {
                width: '7ch',
                backgroundColor: alpha(theme.palette.common.white, 0.25),
                borderRadius: theme.shape.borderRadius,
            },
            [theme.breakpoints.up('lg')]: {
                width: '7ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
  
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
                                    <Search>
                                        <SearchIconWrapper>
                                        <SearchIcon sx={{color: 'white'}}/>
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                        placeholder="Search"
                                        inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </Search>
                                </Box>
                                <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                                    <Search>
                                        <SearchIconWrapper>
                                        <SearchIcon sx={{color: 'white'}}/>
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                        inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </Search>
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
                    <div className="showsContainer">
                        <Grid container justifyContent="center" spacing={3} className="shows" maxWidth="lg">
                            {shows.map((show) => (
                                <Grid key={show} item xs={3}>
                                    <div className="shadow">
                                        <div className="show">
                                            <img className="showImg" src={show.img} alt={show.performer} />
                                            <div className="showLabel">
                                                {show.genre}
                                            </div>
                                            <div className="showStar">
                                                {show.performer}
                                            </div>
                                            <div className="moreInfo">
                                                <a href={show.info} className="moreInfoText">
                                                    More Info <ArrowForwardIcon/>
                                                </a>
                                                <div className="ticket">
                                                    <div className="horiz"></div>
                                                    <a href={show.tickets} className="ticketIcon">
                                                        <ConfirmationNumberOutlinedIcon />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
                <div className="Reviews">
                    <div className="header">
                        <div>
                            <div className="title">
                                Reviews
                            </div>
                            <div className="underLine"></div>
                        </div>
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} className="reviewNav">
                            <div className="reviewPages">
                                <span className="currentPage">1 </span>
                                <span className="totalPages">/ 12</span>
                            </div>
                            <div className="reviewArrows">
                                <ArrowBackIcon/>
                                <ArrowForwardIcon/>
                            </div>
                        </Box>
                    </div>
                    <div className="showsContainer">
                        <Grid container justifyContent="center" spacing={3} className="shows" maxWidth="lg">
                            {reviews.map((review) => (
                                <Grid key={review} item xs={4}>
                                    <div className="shadowReview">
                                        <div className="review">
                                            <div className="marginReview">
                                                <div className="reviewHeader">
                                                    <img src={review.img} alt="User" className="reviewImg"></img>
                                                    <div className="reviewFrom">
                                                        <div className="reviewName">
                                                            {review.from}
                                                        </div>
                                                        <div className="reviewLocation">
                                                            {review.location}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="reviewContent">
                                                    <p>{review.review}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>

                </div>
            </Container>
        </div>
    </div>
  )
}

export default Home