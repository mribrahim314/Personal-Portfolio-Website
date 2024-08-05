import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  

  return (
    <Box sx={{ 
      mt: 8, 
      textAlign: 'center', 
      height: 'calc(100vh - 346px)',
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center' 
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h1" gutterBottom color="primary">
          Ibrahim Nehme
        </Typography>
        <Typography variant="h4" color="text.secondary" gutterBottom>
          Computer Engineer
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '600px', margin: 'auto', mb: 4 }}>
          Passionate about designing and implementing innovative solutions in the world of technology.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          View My Projects
        </Button>
      </motion.div>
    </Box>
  );
};

export default Home;