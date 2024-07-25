import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const Certifications: React.FC = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Certifications
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Course in Cybersecurity - Semicolon Academy, 2023" secondary="Completed an intensive course covering network security, ethical hacking, threat intelligence, and secure coding." />
        </ListItem>
        {/* Add more certifications if needed */}
      </List>
    </Box>
  );
};

export default Certifications;
