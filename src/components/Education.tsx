import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Education: React.FC = () => {
  

  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h2" gutterBottom color="primary">
        Education
      </Typography>
      <Paper elevation={3} sx={{ p: 3, position: 'relative'}}>
        
        <SchoolIcon sx={{ position: 'absolute', left: 10, top: 16, color: 'primary.main', fontSize: 40 }} />
        <Box sx={{display:'flex',flexDirection:'column',ml:5}}>
        <Typography variant="h5" gutterBottom color="secondary">
          Bachelor's Degree of Science in Computer Engineering
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Lebanese International University, Beirut, Lebanon
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Graduation Year: 2024
        </Typography>
        <Typography variant="body1" color="text.secondary">
          GPA: 3.78
        </Typography></Box>
      </Paper>
    </Box>
  );
};

export default Education;