import React from 'react';
import MobileBottomNav from './MobileBottomNav'
import DesktopBottomNav from './DesktopBottomNav'
import { useMediaQuery } from '@mui/material';

const BottomNav = () => {
  // Use MUI's useMediaQuery hook to check for screen size
  const isMobile = useMediaQuery('(max-width: 600px)'); // Adjust the breakpoint as needed

  return (
    <>
      {/* Render the DesktopNavBar component for larger screens */}
      {isMobile ? <MobileBottomNav /> : <DesktopBottomNav />}
    </>
  );
};

export default BottomNav; 
