import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
  

  return (
    <Box sx={{ bgcolor: 'background.paper', py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" gutterBottom>
          Connect with me
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <IconButton color="primary" href="https://www.linkedin.com/in/ibrahim-nehme-064a4b225/" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="primary" href="https://github.com/mribrahim314" target="_blank">
            <GitHubIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          &copy; 2024 Ibrahim Nehme. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;