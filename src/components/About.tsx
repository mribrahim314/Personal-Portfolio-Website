import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          I am a dedicated and highly skilled computer engineer with a passion for designing and implementing innovative solutions. With a solid foundation in software development and hardware systems, I thrive on tackling complex technical challenges to drive technological advancements. Equipped with a strong analytical mindset and excellent problem-solving abilities, I possess a track record of delivering high-quality projects within tight deadlines.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default About;
