import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <Box sx={{ mt: 8, textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h6" color="textSecondary">
          I'm Ibrahim Nehme, a dedicated computer engineer passionate about designing and implementing innovative solutions.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Home;
