import React from 'react';
import { AppBar, Toolbar, Typography, Button, useTheme, Box } from '@mui/material';

interface HeaderProps {
  setActivePage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActivePage }) => {
  const theme = useTheme();

  return (
    <AppBar position="fixed" color={theme.palette.mode === 'light' ? 'primary' : 'default'} elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Ibrahim Nehme
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" onClick={() => setActivePage('Home')}>Home</Button>
          <Button color="inherit" onClick={() => setActivePage('About')}>About</Button>
          <Button color="inherit" onClick={() => setActivePage('Projects')}>Projects</Button>
          <Button color="inherit" onClick={() => setActivePage('Education')}>Education</Button>
          <Button color="inherit" onClick={() => setActivePage('Certifications')}>Certifications</Button>
          <Button color="inherit" onClick={() => setActivePage('Skills')}>Skills</Button>
          <Button color="inherit" onClick={() => setActivePage('Contact')}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;