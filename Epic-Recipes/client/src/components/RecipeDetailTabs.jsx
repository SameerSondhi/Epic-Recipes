import React from 'react';
import MobileDetailTabs from './MobileDetailTabs'
import DesktopDetailTabs from './DesktopDetailTabs'
import { useMediaQuery } from '@mui/material';

const RecipeDetailTabs = () => {
  // Use MUI's useMediaQuery hook to check for screen size
  const isMobile = useMediaQuery('(max-width: 600px)'); // Adjust the breakpoint as needed

  return (
    <>
      {/* Render the DesktopNavBar component for larger screens */}
      {isMobile ? <MobileDetailTabs /> : <DesktopDetailTabs />}
    </>
  );
};

export default RecipeDetailTabs;