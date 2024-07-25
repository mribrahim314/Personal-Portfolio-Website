import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                    &copy; 2024 Ibrahim Nehme. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
