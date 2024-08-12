import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, PaletteMode, Container, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import './styles.css';

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('Home');
  const [mode, setMode] = useState<PaletteMode>('light');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#3f51b5',
          },
          secondary: {
            main: '#f50057',
          },
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontSize: '3rem',
            fontWeight: 700,
          },
          h2: {
            fontSize: '2.5rem',
            fontWeight: 600,
          },
          h3: {
            fontSize: '2rem',
            fontWeight: 600,
          },
        },
      }),
    [mode]
  );

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home setActivePage = {setActivePage} />;
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Education':
        return <Education />;
      case 'Certifications':
        return <Certifications />;
      case 'Skills':
        return <Skills />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home setActivePage = {setActivePage}/>;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header setActivePage={setActivePage} />
        <Box sx={{ position: 'relative', paddingTop: '64px' }}> {/* Adjust paddingTop based on your header height */}
          <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
            {renderPage()}
          </Container>
          <Box
            sx={{
              position: 'absolute',
              top: '72px', 
              right: '16px',
              zIndex: 1000,
            }}
          >
            <div
              className="switch"
              onClick={toggleMode}
              color="inherit"
              data-isOn={mode === 'dark'}
            >
              <motion.div className="handle" layout transition={spring} style={{alignContent:'center'}}>
                {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon style={{ color: theme.palette.primary.contrastText }} />}
              </motion.div>
            </div>
          </Box>
        </Box>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;