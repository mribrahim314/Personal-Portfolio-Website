import React from 'react';
import { Grid, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <Grid container spacing={4} sx={{ mt: 8 }}>
      <Grid item xs={12} sm={6} md={4}>
        <motion.div variants={cardVariants} whileHover="hover">
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                AutoMate: Parts and Service Hub
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Developed an innovative solution that addresses the challenges and streamlines the automotive repair process. The project serves as a centralized online marketplace for car parts, mechanics, and drivers.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://github.com/mribrahim314/AutoMate-Parts-and-Service-Hub" target="_blank">View Project</Button>
            </CardActions>
          </Card>
        </motion.div>
      </Grid>
      {/* Add more projects similarly */}
    </Grid>
  );
};

export default Projects;
