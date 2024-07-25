import React from 'react';
import { AppBar, Toolbar, Typography, Button, Paper } from '@mui/material';

interface HeaderProps {
  setActivePage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActivePage }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ibrahim Nehme
        </Typography>
        <Button color="inherit" onClick={() => setActivePage('Home')}>Home</Button>
        <Button color="inherit" onClick={() => setActivePage('About')}>About</Button>
        <Button color="inherit" onClick={() => setActivePage('Projects')}>Projects</Button>
        <Button color="inherit" onClick={() => setActivePage('Education')}>Education</Button>
        <Button color="inherit" onClick={() => setActivePage('Certifications')}>Certifications</Button>
        <Button color="inherit" onClick={() => setActivePage('Skills')}>Skills</Button>
        <Button color="inherit" onClick={() => setActivePage('Contact')}>Contact</Button>
      </Toolbar>
    </AppBar>
  
  );
};

export default Header;
