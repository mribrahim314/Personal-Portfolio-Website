import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const Skills: React.FC = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Programming Languages: Assembly, C, Python, Octave, Java, MIPS" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Mobile Application Development (Android): Android Studio, AndroidManifest, User Interface Design" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Networking: Protocols and applications (FTP, SMTP, HTTP, etc.), CCNA1 CISCO (Packet Tracer)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Web Development: HTML and CSS, JavaScript, JQuery, PHP, Session tracking, Security and privacy risks" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Database Development: phpMyAdmin for MySQL, SQL" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Operating Systems: Windows, Kali Linux, Ubuntu" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Skills;
