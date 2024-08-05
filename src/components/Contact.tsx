import React from 'react';
import { Typography, Box, TextField, Button, Paper, Grid } from '@mui/material';

const Contact: React.FC = () => {
  

  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h2" gutterBottom color="primary">
        Contact
      </Typography>
      <Paper elevation={3} sx={{ p: 4 }}>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Message" multiline rows={4} variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" size="large" type="submit">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;