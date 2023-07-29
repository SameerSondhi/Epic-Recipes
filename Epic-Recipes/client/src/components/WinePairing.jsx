import { Typography } from '@mui/material';
import React from 'react';
import { Stack, useMediaQuery } from '@mui/material';

const WinePairing = ({ wines }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <div>
        {wines && wines.length>0 ?
      <Typography dangerouslySetInnerHTML={{ __html: wines }} 
      sx={{fontFamily: 'Alkatra', fontSize: isMobile ? '15px' : '20px'}} />
      :
      <Typography sx={{fontFamily: 'Alkatra', fontSize: isMobile ? '15px' : '20px'}}>No wine recommendations for this recipe at the moment.</Typography>
        }
    </div>
  );
};

export default WinePairing;