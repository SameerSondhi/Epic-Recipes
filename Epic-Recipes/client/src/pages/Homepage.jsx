import * as React from 'react';
import TopMenuBar from '../components/TopMenuBar';
import SearchComponent from '../components/SearchComponent';
import Box from '@mui/material/Box';
import BottomNav from '../components/BottomNav';
import { Stack, useMediaQuery } from '@mui/material';
const Homepage = () => {
  const isMobile = useMediaQuery('(max-width: 600px)'); // Adjust the breakpoint as needed
  return (
   <Box sx={{width:1, overflowX:'hidden'}}>
    <TopMenuBar/>
    <Box className='main' sx={{ flex: 1 }}>
    <Stack direction="column"
    alignItems={isMobile ? 'center' : 'center'}
     position="relative"
    top={isMobile ? '25%' : '40%'}
     >
      <h1 id='searchHeader'
      style={{
        textAlign: isMobile ? 'center' : 'center', // Center on mobile, align to the left on larger screens
        color: 'whitesmoke',
        fontWeight: 'bold',
        fontFamily: 'Alkatra',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
      }}>Find an Epic Recipe</h1>
      <SearchComponent/>
      </Stack>
          </Box>  
          <Box sx={{ backgroundColor: 'black', position: 'fixed', bottom: 0, left: 0, right: 0 }}>
          <BottomNav sx={{position:'fixed'}}/>
          </Box>
    </Box>
  )
}
export default Homepage