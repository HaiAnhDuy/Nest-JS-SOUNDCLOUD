'use client'

import { css } from '@emotion/css'
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Container from '@mui/material/Container';
import Link from 'next/link'


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: '10%',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
}));

export default function HeaderBar() {
    //startd
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (setting: any) => {
        setAnchorElUser(null);
        // if (setting === 'Profile') {
        //     router.push('/profile')
        // }
    };

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    //end









    const menuId = 'primary-search-account-menu';



    const mobileMenuId = 'primary-search-account-menu-mobile';


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: '#000000' }}>
                <Container maxWidth='xl'>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'contents', sm: 'block' }, cursor: 'pointer' }}
                        >
                            <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>SOUNDCLOUD</Link>
                        </Typography>
                        <Search >
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' }
                                , gap: '20px'
                                , alignItems: 'center'
                                , cursor: 'pointer'
                            }}

                        >
                            <Link href="/playlist" style={{ textDecoration: 'none', color: 'white' }}>Playlist</Link>
                            <Link href="/like" style={{ textDecoration: 'none', color: 'white' }}>Likes</Link>
                            <span>Upload</span>


                        </Box>
                        <Box sx={{ flexGrow: 0, marginLeft: '25px' }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
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

                                <MenuItem >
                                    <Link href={'/profile'} style={{ textDecoration: 'none', color: 'black' }}>Profile</Link>
                                </MenuItem>

                                <MenuItem >
                                    <Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>Logout</Link>
                                </MenuItem>


                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>

            </AppBar>

        </Box >
    );
}
