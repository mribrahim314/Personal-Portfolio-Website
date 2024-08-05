import React from 'react';
import { Grid, Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  

  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h2" gutterBottom color="primary">
        Projects
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div variants={cardVariants} whileHover="hover">
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom color="secondary">
                  AutoMate: Parts and Service Hub
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Developed an innovative solution that addresses the challenges and streamlines the automotive repair process. The project serves as a centralized online marketplace for car parts, mechanics, and drivers.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="https://github.com/mribrahim314/AutoMate-Parts-and-Service-Hub" target="_blank">
                  View Project
                </Button>
              </CardActions>
            </Card>
          </motion.div>
        </Grid>

        {/* Add more projects similarly */}
      </Grid>
    </Box>
  );
};

export default Projects;