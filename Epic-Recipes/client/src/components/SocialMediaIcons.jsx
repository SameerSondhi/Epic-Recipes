import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const SocialMediaIcons = ({color}) => {
  return (
    <Box display="flex" justifyContent="flex-end">
        <Link to="https://www.linkedin.com/in/sameer-sondhi/"><LinkedInIcon fontSize='large' style={{color}}/></Link>
        <Link to="https://github.com/SameerSondhi"><GitHubIcon fontSize='large' style={{color}}/></Link>
    </Box>
  )
}

export default SocialMediaIcons