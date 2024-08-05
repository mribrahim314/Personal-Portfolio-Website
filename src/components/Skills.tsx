import React from 'react';
import { Typography, Box, Grid, Paper, Avatar } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';
import SecurityIcon from '@mui/icons-material/Security';
import ComputerIcon from '@mui/icons-material/Computer';

interface SkillProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillProps> = ({ icon, title, skills }) => {
  
  return (
    <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
          {icon}
        </Avatar>
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
      </Box>
      <Box>
        {skills.map((skill, index) => (
          <Typography key={index} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
            • {skill}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};

const Skills: React.FC = () => {
  

  const skillsData = [
    {
      icon: <CodeIcon />,
      title: "Programming Languages",
      skills: ["C", "Python", "Java", "JavaScript", "Assembly", "MIPS"]
    },
    {
      icon: <SmartphoneIcon />,
      title: "Mobile Development",
      skills: ["Android Studio", "User Interface Design", "App Lifecycle Management"]
    },
    {
      icon: <StorageIcon />,
      title: "Database Management",
      skills: ["MySQL", "SQL", "phpMyAdmin", "Database Design"]
    },
    {
      icon: <LanguageIcon />,
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "React", "jQuery"]
    },
    {
      icon: <SecurityIcon />,
      title: "Networking & Security",
      skills: ["FTP", "SMTP", "HTTP", "CCNA1 CISCO", "Network Security"]
    },
    {
      icon: <ComputerIcon />,
      title: "Operating Systems",
      skills: ["Windows", "Linux (Ubuntu, Kali)", "OS Management"]
    }
  ];

  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h2" gutterBottom color="primary">
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skillsData.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SkillCard {...skill} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;