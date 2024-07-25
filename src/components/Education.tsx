import React from 'react';
import { Typography, Box } from '@mui/material';

const Education: React.FC = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <Typography variant="body1">
        Bachelor's Degree of Science in Computer Engineering
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Lebanese International University, Beirut, Lebanon, 2024, GPA: 3.77
      </Typography>
    </Box>
  );
};

export default Education;
