import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <form noValidate autoComplete="off">
        <TextField fullWidth label="Name" margin="normal" />
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Message" multiline rows={4} margin="normal" />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
