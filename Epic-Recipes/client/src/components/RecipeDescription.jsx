import { Typography } from '@mui/material';
import React from 'react';
import { Stack, useMediaQuery } from '@mui/material';

const RecipeDescription = ({ description }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <div>
      <Typography dangerouslySetInnerHTML={{ __html: description }} 
      sx={{fontFamily: 'Alkatra', fontSize: isMobile ? '15px' : '20px'}} />
    </div>
  );
};

export default RecipeDescription;