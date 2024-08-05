import React from 'react';
import { Typography, Box, List, ListItem, ListItemText, Paper, ListItemIcon } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const Certifications: React.FC = () => {
  

  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h2" gutterBottom color="primary">
        Certifications
      </Typography>
      <Paper elevation={3}>
        <List>
          <ListItem>
            <ListItemIcon>
              <VerifiedIcon color="secondary" />
            </ListItemIcon>
            <ListItemText 
              primary={<Typography variant="h6">Course in Cybersecurity</Typography>}
              secondary={
                <>
                  <Typography variant="subtitle1">Semicolon Academy, 2023</Typography>
                  <Typography variant="body2">Completed an intensive course covering network security, ethical hacking, threat intelligence, and secure coding.</Typography>
                </>
              }
            />
          </ListItem>
          {/* Add more certifications if needed */}
        </List>
      </Paper>
    </Box>
  );
};

export default Certifications;