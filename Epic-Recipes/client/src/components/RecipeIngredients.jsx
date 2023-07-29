import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Stack, useMediaQuery } from '@mui/material';

const RecipeIngredients = ({ ingredients }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <div>
      {ingredients.map((ingredient) => (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#1F2021' }} key={ingredient.id} >
      <ListItem alignItems="flex-start">
        <ListItemText primaryTypographyProps={{ style: { fontFamily: 'Alkatra', fontSize: isMobile ? '15px' : '20px' } }}>{ingredient.original}</ListItemText>
      </ListItem>
      <Divider component="li" sx={{bgcolor:'#FF8000', width:'100%', height:'2px'}} />
    </List>
      ))}
    </div>
  );
};

export default RecipeIngredients;