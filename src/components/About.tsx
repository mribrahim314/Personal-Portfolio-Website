import React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  

  return (
    <Box sx={{ mt: 8, height: 'calc(100vh - 346px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom color="primary">
          About Me
        </Typography>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="body1" paragraph>
              I am a dedicated and highly skilled computer engineer with a passion for designing and implementing innovative solutions. With a solid foundation in software development and hardware systems, I thrive on tackling complex technical challenges to drive technological advancements.
            </Typography>
            <Typography variant="body1" paragraph>
              Equipped with a strong analytical mindset and excellent problem-solving abilities, I possess a track record of delivering high-quality projects within tight deadlines. My goal is to contribute to cutting-edge technologies that shape the future of our digital world.
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default About;