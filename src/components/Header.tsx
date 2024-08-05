import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  useTheme, 
  Box, 
  IconButton, 
  Menu, 
  MenuItem,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  setActivePage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActivePage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePageChange = (page: string) => {
    setActivePage(page);
    handleClose();
  };

  const pages = ['Home', 'About', 'Projects', 'Education', 'Certifications', 'Skills', 'Contact'];

  return (
    <AppBar position="fixed" color={theme.palette.mode === 'light' ? 'primary' : 'default'} elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Ibrahim Nehme
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageChange(page)}>
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {pages.map((page) => (
              <Button 
                key={page}
                color="inherit" 
                onClick={() => setActivePage(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;