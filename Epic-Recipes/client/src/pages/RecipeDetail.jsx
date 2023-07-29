import React from 'react';
import MobileRecipeDetail from '../components/MobileRecipeDetail'
import DesktopRecipeDetail from '../components/DesktopRecipeDetail'
import { useMediaQuery } from '@mui/material';

const RecipeDetail = () => {
  // Use MUI's useMediaQuery hook to check for screen size
  const isMobile = useMediaQuery('(max-width: 600px)'); // Adjust the breakpoint as needed

  return (
    <>
      {/* Render the DesktopNavBar component for larger screens */}
      {isMobile ? <MobileRecipeDetail /> : <DesktopRecipeDetail />}
    </>
  );
};

export default RecipeDetail;