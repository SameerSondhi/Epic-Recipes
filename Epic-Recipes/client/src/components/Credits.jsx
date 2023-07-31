import { Typography } from '@mui/material';
import React from 'react';
import { Stack, useMediaQuery } from '@mui/material';

const Credits = ({ sourceName, sourceUrl }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <div>
      <Typography 
      sx={{fontFamily: 'Alkatra', fontSize: isMobile ? '15px' : '20px'}}>This recipe is brought to you by <a href={sourceUrl} target="_blank" rel="noopener noreferrer">{sourceName}</a></Typography>
    </div>
  );
};

export default Credits;