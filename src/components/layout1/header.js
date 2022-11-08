

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import  Image from '../../dhkidusraguela.jpg';




const pages = ['Reading', 'Holiday', 'Education', 'Login','SignUp'];
const settings = ['Profile', 'Account', 'Dashboard',  'Logout'];

function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav( null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: "#2E3B55" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, display: { xs: 2, md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "flex" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Button href="/reading" style={{textTransform: 'none'}} >{pages[0]} </Button>
                <Button href="/holiday" style={{textTransform: 'none'}}>{pages[1]} </Button>
                <Button href="/education" style={{textTransform: 'none'}}>{pages[2]} </Button>
                <Button href="/login" style={{textTransform: 'none'}}>{pages[3]} </Button>
                <Button href="/register" style={{textTransform: 'none'}}>{pages[4]} </Button>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 1, md: "flex" },
              fontFamily: "monospace",
              fontWeight: 400,
              letterSpacing: "none",
              color: "inherit",
              textDecoration: "none",
            }}
          >
           Austin St. Raguel ETOC
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 400,
              letterSpacing: "none",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Austin St. Raguel EOTC
          </Typography>
          <Box
            justifyContent="right"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex", lg: "flex" },
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              href="/reading"
              sx={{ my: 2, color: "white", display: "block" }}
              style={{textTransform: 'none'}}
            >
              {pages[0]}
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              href="/holiday"
              sx={{ my: 2, color: "white", display: "block" }}
              style={{textTransform: 'none'}}
            >
              {pages[1]}
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              href="/education"
              sx={{ my: 2, color: "white", display: "block" }}
              style={{textTransform: 'none'}}
            >
              {pages[2]}
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              href="/login"
              sx={{ my: 2, color: "white", display: "block" }}
              style={{textTransform: 'none'}}
            >
              {pages[3]}
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              href="/register"
              sx={{ my: 2, color: "white", display: "block" }}
              style={{textTransform: 'none'}}
            >
              {pages[4]}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={Image} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <Button href="/profile" style={{textTransform: 'none'}}>{settings[0]}</Button>
                  <Button href="/account" style={{textTransform: 'none'}}>{settings[1]}</Button>
                  <Button href="/userdashboard" style={{textTransform: 'none'}}>{settings[2]}</Button>
                  <Button href="/Logout" style={{textTransform: 'none'}}>{settings[3]}</Button>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
